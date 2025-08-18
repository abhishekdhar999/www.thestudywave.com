'use client';
import { useEffect, useState } from "react";
import ClassCard from "../Component/ClassCard/ClassCard.js"
import { classes, users } from "../Database/db.js";
import Navbar from "../Component/Navbar/Navbar.js";
import { Footer } from "../Component/Footer.js";
import Link from "next/link";

export default function TodayClasses() {
  const [todayClasses, setTodayClasses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
  const [quote, setQuote] = useState(null);

  const quotes = [
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
    { text: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.", author: "Bill Gates" },
    { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "William Butler Yeats" },
    { text: "The mind is not a vessel to be filled, but a fire to be kindled.", author: "Plutarch" },
    { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
    { text: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.", author: "Martin Luther King Jr." },
    { text: "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.", author: "Henry Ford" },
    { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert" },
    { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
  ];

  useEffect(() => {
    const refreshToken = localStorage.getItem("token");
    const user = users.find(user => user.refreshTokken === refreshToken);
    if (!user) return;

    setLoggedInUser(user);
    const userId = user._id;
    const isTeacher = user.role === "Teacher";
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const filtered = classes.filter(cls =>
      cls.days.includes(today) &&
      (isTeacher ? cls.teacher === userId : cls.students.includes(userId))
    );

    const enriched = filtered.map(cls => ({
      ...cls,
      teacherName: (users.find(u => u._id === cls.teacher)?.name) || cls.teacherName || "Unknown",
    }));

    setTodayClasses(enriched);
  }, []);

  // pick a random quote once on mount
  useEffect(() => {
    const idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
  }, []);

  return (
    <>
    <Navbar navBgClass="bg-white/70" navBorderClass="border-black/10"></Navbar>
      <div className="bg-white min-h-screen p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mt-24">
            <h1 className={`text-3xl md:text-4xl font-bold text-black`}>
              Hello <span className="text-orange-600">{loggedInUser?.name || 'there'}</span>, welcome to the class
            </h1>
            <p className={`mt-3 text-base md:text-lg text-gray-700`}>
              Here are your classes for today <span className="align-middle">🎒✨</span>
              <span className="ml-2 inline-block bg-orange-200 text-orange-900 px-3 py-1 rounded-full border border-black/10 font-semibold">
                Lets go!
              </span>
            </p>
            {quote && (
              <p className="mt-6 text-lg md:text-xl text-gray-900 font-semibold tracking-tight leading-snug text-center max-w-3xl mx-auto">
                “{quote.text}”
                <span className="block mt-2 text-sm text-gray-700 font-medium">— {quote.author}</span>
              </p>
            )}
          </div>

          {/* Today's Classes Cards */}
          <div className="mt-8">
            {todayClasses.length > 0 ? (
              <div className="space-y-6">
                {todayClasses.map(cls => (
                  <ClassCard key={cls._id} classData={cls} />
                ))}
              </div>
            ) : (
              <div className="text-center text-xl text-gray-600 font-medium">No classes scheduled for today.</div>
            )}
          </div>

          {/* Rescheduled classes section */}
          <section className="mt-12">
            <div className="max-w-xl mx-auto text-center bg-white border border-black/10 rounded-2xl p-6 shadow-sm">
              <p className="text-base md:text-lg text-gray-800">
                For Rescheduled classes 
              </p>
              <div className="mt-4 flex justify-center">
                <Link href="/RescheduledClasses" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200">
                  Rescheduled classes
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      

      {/* STUDYWAVE marquee heading */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className={`text-6xl md:text-8xl font-bold text-center whitespace-nowrap`}>
            <span className="image-textS">S</span>
            <span className="image-textT">T</span>
            <span className="image-textU">U</span>
            <span className="image-textD">D</span>
            <span className="image-textY">Y</span>
            <span className="image-textW">W</span>
            <span className="image-textA">A</span>
            <span className="image-textV">V</span>
            <span className="image-textE">E</span>
          </h1>
        </div>
      </section>

      {/* Scrolling Carousel (User Provided) */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="flex gap-24 animate-carousel">
              {/* First image */}
              <div className="relative min-w-[200px] max-w-[20vw] h-80 bg-rose-300 rounded-t-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/one.webp"
                  alt="Student 1"
                  className="absolute top-12 bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              {/* Second image */}
              <div className="relative min-w-[200px] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/three.webp"
                  alt="Student 2"
                  className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              <div className="relative min-w-[200px] w-[140vw] h-80 bg-blue-400 rounded-4xl overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/two.webp"
                  alt="Student 3"
                  className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              <div className="relative min-w-[200px] w-[140vw] h-80 bg-orange-300 rounded-tl-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/four.webp"
                  alt="Student 4"
                  className="absolute left-9 bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              <div className="relative min-w-[200px] w-[140vw] h-80 bg-purple-400 rounded-b-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/five.webp"
                  alt="Student 5"
                  className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              <div className="relative min-w-[200px] w-[140vw] h-80 bg-green-300 rounded-full overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/61f64598c68d4ab53ecff616/66cc466567f8ec95b55a6810_H_9-12.avif"
                  alt="Student 6"
                  className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              {/* First image duplicate */}
              <div className="relative min-w-[200px] w-[140vw] h-80 bg-rose-300 rounded-t-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/three.webp"
                  alt="Student 1"
                  className="absolute h-full top-12 bottom-0 w-72 object-cover bg-transparent"
                />
              </div>

              {/* Second image */}
              <div className="relative min-w-[200px] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/one.webp"
                  alt="Student 2"
                  className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              <div className="relative min-w-[200px] w-[140vw] h-80 bg-blue-400 rounded-4xl overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/two.webp"
                  alt="Student 3"
                  className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              <div className="relative min-w-[200px] w-[140vw] h-80 bg-orange-200 rounded-tl-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/four.webp"
                  alt="Student 4"
                  className="absolute left-9 bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>

              <div className="relative min-w-[200px] w-[140vw] h-80 bg-purple-400 rounded-b-full overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/five.webp"
                  alt="Student 5"
                  className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes carouselMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-carousel {
            animation: carouselMove 40s linear infinite;
          }
        `}</style>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
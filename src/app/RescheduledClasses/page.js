'use client';
import { DynaPuff } from "next/font/google";
import { useEffect, useState } from "react";
import ClassCard from "../Component/ClassCard/ClassCard.js"
import { classes, users } from "../Database/db.js";
import Navbar from "../Component/Navbar/Navbar.js";
import RescheduleClassCard from "../Component/RescheduleClassCard.js"
import { Footer } from "../Component/Footer.js";
const DynaPuffs = DynaPuff({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const DynaPuffs2 = DynaPuff({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

export default function TodayClasses() {
  const [todayClasses, setTodayClasses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();
const[today,setToday] = useState();

const handleChange = (e) => {
    setToday(e.target.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    
    const refreshToken = localStorage.getItem("token");
    const user = users.find(user => user.refreshTokken === refreshToken);
    if (!user) return;

    setLoggedInUser(user);
    const userId = user._id;
    const isTeacher = user.role === "Teacher";
    const todays =  today
    // new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const filtered = classes.filter(cls =>
      cls.days.includes(todays) &&
      (isTeacher ? cls.teacher === userId : cls.students.includes(userId))
    );

    // Enrich with teacherName for consistent display in RescheduleClassCard
    const enriched = filtered.map(cls => ({
      ...cls,
      teacherName: (users.find(u => u._id === cls.teacher)?.name) || cls.teacherName || "Unknown",
    }));

    setTodayClasses(enriched);
  
    }
  return (
    <div className="bg-white min-h-screen">
    <Navbar navBgClass="bg-white/70" navBorderClass="border-black/10"></Navbar>
      <div className="p-6 mt-24">

        {/* Heading */}
        <div className="max-w-5xl mx-auto px-6">
          <h1 className={`text-3xl md:text-4xl font-bold text-black ${DynaPuffs2.className}`}>
            Welcome to Rescheduled Classes
          </h1>
          <p className={`mt-2 text-base md:text-lg text-gray-700 ${DynaPuffs.className}`}>
            Pick a day to see classes moved to that date. <span className="align-middle">📅✨</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 p-6 md:p-8 bg-white border border-black/10 rounded-2xl shadow-xl space-y-5">

  <div>
    <label htmlFor="dropdown" className="block text-base md:text-lg font-semibold text-gray-900">
      Pick a day to explore rescheduled classes ✨
    </label>
    <p className="mt-1 text-sm text-gray-600">We’ll show classes moved to the day you select.</p>

    <div className="relative mt-3">
      <select
        id="dropdown"
        name="dropdown"
        className="block w-full px-4 py-3 pr-12 border border-black/10 bg-white/90 backdrop-blur text-gray-900 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all cursor-pointer appearance-none"
        value={today}
        onChange={handleChange}
      >
        <option value="">— Choose a day —</option>
        <option value="Monday">Monday 🗓️</option>
        <option value="Tuesday">Tuesday 🎯</option>
        <option value="Wednesday">Wednesday 🌈</option>
        <option value="Thursday">Thursday ✨</option>
        <option value="Friday">Friday 🎉</option>
        <option value="Saturday">Saturday ☀️</option>
        <option value="Sunday">Sunday 🌙</option>
      </select>
      <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
      </svg>
    </div>
  </div>

  <button
    type="submit"
    className="w-full inline-flex items-center justify-center text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-200 font-semibold rounded-full text-base md:text-lg px-6 md:px-8 py-3 md:py-3.5 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
  >
    Show Classes 🚀
  </button>
</form>

        {/* Today's Classes Cards */}
        <div className="">
          {todayClasses.length > 0 ? (
            <div className="">
              {todayClasses.map(cls => (
                <RescheduleClassCard key={cls._id} classData={cls} today={today} />
              ))}
            </div>
          ) : (
            <div className="text-center text-xl text-gray-500"></div>
          )}
        </div>

        {/* Scrolling Carousel (User Provided) */}
        <section className="bg-white py-6 mt-6">
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
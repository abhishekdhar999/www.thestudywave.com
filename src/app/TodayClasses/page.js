'use client';
import { DynaPuff } from "next/font/google";
import { useEffect, useState } from "react";
import ClassCard from "../Component/ClassCard/ClassCard.js"
import { classes, users } from "../Database/db.js";
import Navbar from "../Component/Navbar/Navbar.js";
import Link from "next/link.js";
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

  useEffect(() => {
    const refreshToken = localStorage.getItem("token");
    const user = users.find(user => user.refreshTokken === refreshToken);
    if (!user) return;

    setLoggedInUser(user);
    const userId = user._id;
    const isTeacher = user.role === "Teacher";
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
console.log(today)
    const filtered = classes.filter(cls =>
      cls.days.includes(today) &&
      (isTeacher ? cls.teacher === userId : cls.students.includes(userId))
    );

    setTodayClasses(filtered);
  }, []);

  return (
    <>
    <Navbar></Navbar>
      <div className="bg-[#ffe4d2] ">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center p-6 md:p-12">
          <div className="max-w-[800px] text-center">
            <p className={`text-6xl md:text-7xl mt-18 lg:text-7xl font-bold text-black ${DynaPuffs.className}`}>
              Bringing classroom concepts to life through interactive learning
            </p>
          </div>

          <div className="max-w-[600px] mt-6 text-center">
            <p className="text-lg font-bold md:text-xl text-black">
              From your first step  into learning <span className="text-4xl  font-extrabold">*</span> to the heights of your biggest achievements, 
              we guide you to learn with passion, grow with confidence, and shine with purpose.
            </p>
          </div>

<div className="flex justify-center md:gap-24 gap-6 m-12 md:flex-row flex-col">
<Link href="/RescheduledClasses">
          <div className="w-46 h-16 bg-green-300 border-2 border-black   text-gray-600 rounded-full text-center flex justify-center items-center text-l font-bold">
  Rescheduled classes
</div>
</Link>

<div className="w-46 h-16 bg-purple-300 border-2 border-black  text-black rounded-full text-center flex justify-center items-center text-l font-bold">
+91 7740064839
</div>
</div>

          {/* STUDYWAVE heading */}
          <h1 className={`mt-10 text-6xl md:text-8xl font-bold text-center ${DynaPuffs2.className}`}>
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



        {/* Scrolling Carousel */}
        <div className="overflow-hidden whitespace-nowrap w-full">
<div className="flex gap-24 animate-carousel ">
  {/* First image */}
  <div className="relative min-w-[200px] max-w-[20vw]  h-80 bg-rose-300 rounded-t-full overflow-hidden">
    <img
      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/one.webp"
      alt="Student 1"
      className="absolute top-12 bottom-0 w-full object-cover h-72 bg-transparent"
    />
  </div>

  {/* Second image */}
  <div className="relative  min-w-[200px] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
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
      className="absolute  bottom-0 w-full object-cover h-72 bg-transparent"
    />
  </div>
  
  {/* <div className="relative min-w-[200px] w-[140vw] h-80 bg-green-300 rounded-full overflow-hidden">
    <img
      src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.07.10.jpeg?raw=true"
      alt="Student 6"
      className="absolute bottom-0 w-full object-fit h-80 bg-transparent"
    />
  </div> */}

  {/* First image duplicate */}
  <div className="relative min-w-[200px] w-[140vw] h-80 bg-rose-300 rounded-t-full overflow-hidden">
    <img
      src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/209592b793ca7ee9a677a9a3caa345591543ba57/three.webp"
      alt="Student 1"
      className="absolute top-12 bottom-0 w-full object-cover bg-transparent"
    />
  </div>

  {/* Second image */}
  <div className="relative min-w-[200px]] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
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
      className="absolute  bottom-0 w-full object-cover h-72 bg-transparent"
    />
  </div>
  
  {/* <div className="relative min-w-[200px] w-[140vw] h-80 bg-green-300 rounded-full overflow-hidden">
    <img
      src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/b11b7b30d5746d8f2bbb3e1ed68d4622eb6afdbe/WhatsApp%20Image%202025-06-13%20at%2019.07.10.jpeg?raw=true"
      alt="Student 6"
      className="absolute bottom-0 w-full object-cover h-72 bg-transparent"
    />
  </div> */}
</div>
</div>
        {/* Today's Classes Banner */}
        <div className="m-12 md:m-18 flex justify-center">
          <img className="rounded-3xl w-full max-w-5xl" src="https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/todayclaseesbanner.png?raw=true" alt="Today's Classes Banner" />
        </div>


       

        {/* Today's Classes Cards */}
        <div className="">
          {todayClasses.length > 0 ? (
            <div className="">
              {todayClasses.map(cls => (
                <ClassCard key={cls._id} classData={cls} />
              ))}
            </div>
          ) : (
            <div className="text-center text-xl text-gray-500"></div>
          )}
        </div>
      </div>
    </>
  );
}
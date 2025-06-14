'use client';
import { DynaPuff } from "next/font/google";
import { useEffect, useState } from "react";
import ClassCard from "../Component/ClassCard/ClassCard.js"
import { classes, users } from "../Database/db.js";
import Navbar from "../Component/Navbar/Navbar.js";
import RescheduleClassCard from "../Component/RescheduleClassCard.js"
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

    setTodayClasses(filtered);
  
    }
  return (
    <>
    <Navbar></Navbar>
      <div className="mt-24   ">

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10  p-6 bg-white rounded-xl shadow-md space-y-4">

  <div >
    <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">Select an day for rescheduled class</label>
    <select
      id="dropdown"
      name="dropdown"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white text-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      value={today}
      onChange={handleChange}
    >
      <option value="">--Please choose an option--</option>
      <option value="Monday">Monday</option>
  <option value="Tuesday">Tuesday</option>
  <option value="Wednesday">Wednesday</option>
  <option value="Thursday">Thursday</option>
  <option value="Friday">Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
    </select>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
  >
    Submit
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
      </div>
    </>
  );
}
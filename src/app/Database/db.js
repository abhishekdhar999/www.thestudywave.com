const users = [
    {
"_id": "67f0c2cd9e13ec089d600b00",
  "name": "Abhishek Rao",
  "email": "abhishek@studywave.com",
  "password": "Abhishek@Math123",
  "phoneNumber": 9876543299,
  "role": "Teacher",
  "subjects": ["Math"],
  "createdAt": "2025-04-16T08:00:00.000+00:00",
  "updatedAt": "2025-04-16T08:00:00.000+00:00",
  "__v": 0,
  "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNSIsImVtYWlsIjoiYWJoaXNoZWtAc3R1ZHl3YXZlLmNvbSJ9.j15",
  "isVerifiedUser": true
},
    { 
"_id": "67f0c2cd9e13ec089d600b01",
  "name": "Tanisha",
  "email": "tanisha@studywave.com",
  "password": "Tanisha@Math456",
  "phoneNumber": 9876543300,
  "role": "Student",
  "subjects": ["Math"],
  "createdAt": "2025-04-16T08:05:00.000+00:00",
  "updatedAt": "2025-04-16T08:05:00.000+00:00",
  "__v": 0,
  "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNiIsImVtYWlsIjoidGFuaXNoYUBzdHVkeXdhdmUuY29tIn0.j16",
  "isVerifiedUser": true
    },
    {
      "_id": "67f0c2cd9e13ec089d600a72",
      "name": "Sameh",
      "email": "sameh@studywave.com",
      "password": "samehA2#cZ",
      "phoneNumber": 9876543210,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-05T05:42:37.146+00:00",
      "updatedAt": "2025-04-11T10:06:13.217+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwiZW1haWwiOiIxQvhvGV4YW1wbGUuY29tIn0.a1",
      "isVerifiedUser": false
    },
    {
      "_id": "67f0c2cd9e13ec089vewd600a79",
      "name": "Ryan",
      "email": "ryan@studywave.com",
      "password": "ryanA2#cZ",
      "phoneNumber": 9876543210,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-05T05:42:37.146+00:00",
      "updatedAt": "2025-04-11T10:06:13.217+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwiZW1haWwiOiIxfvrvQvhvGV4YW1wbGUuY29tIn0.a1",
      "isVerifiedUser": false
    },
    {
      "_id": "67f0c2cd9e13b32fc089d600a72",
      "name": "Sahej",
      "email": "sahej@studywave.com",
      "password": "sahejA2#cZ",
      "phoneNumber": 9876543210,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-05T05:42:37.146+00:00",
      "updatedAt": "2025-04-11T10:06:13.217+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwiZW1e2haWwiOiIxQvhvGV4YW1wbGUuY29tIn0.a223",
      "isVerifiedUser": false
    },
    {
      "_id": "67f0c2cd9e13ecgj23089d600a72",
      "name": "Sahana",
      "email": "sahan@studywave.com",
      "password": "sahan35#rX",
      "phoneNumber": 9876543210,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-05T05:42:37.146+00:00",
      "updatedAt": "2025-04-11T10:06:13.217+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwiZW1haWfdswiOiIxQvhvGV4YW1wbGUuY29tIn0.afsv44",
      "isVerifiedUser": false
    },
    {
      "_id": "67f4e8f092e54d81ddd7bbe5",
      "name": "Mohit Tariyal",
      "email": "mohit@studywave.com",
      "password": "6gvc782",
      "phoneNumber": 9876543210,
      "isVerifiedUser": true,
      "role": "Teacher",
      "subjects": [],
      "createdAt": "2025-04-08T09:14:24.354+00:00",
      "updatedAt": "2025-04-08T17:15:00.162+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwiZW1haWwiOiIxQGV4YW1wbGUuY29tIn0.a1",
    },
    {
      "_id": "67f4e90892e54d81ddd7bbe8",
      "name": "Skand",
      "email": "skand@studywave.com",
      "password": "skandT$9bX",
      "phoneNumber": 9876543211,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:14:48.866+00:00",
      "updatedAt": "2025-04-11T10:12:56.051+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyIiwiZW1haWwiOiIyQGV4YW1wbGUuY29tIn0.b2",
    },
    {
      "_id": "67f4e91792e54d81ddd7bbeb",
      "name": "Darius",
      "email": "darius@studywave.com",
      "password": "dariusfL1!k",
      "phoneNumber": 9876543212,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:15:03.878+00:00",
      "updatedAt": "2025-04-11T10:07:06.912+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzIiwiZW1haWwiOiIzQGV4YW1wbGUuY29tIn0.c3",
    },
    {
      "_id": "67f4e92692e54d81ddd7bbee",
      "name": "Rahil",
      "email": "rahil@studywave.com",
      "password": "rahilR4*zY",
      "phoneNumber": 9876543213,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:15:18.369+00:00",
      "updatedAt": "2025-04-08T09:15:18.369+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0IiwiZW1haWwiOiI0QGV4YW1wbGUuY29tIn0.d4"
    },
    {
      "_id": "67f4e93392e54d81ddd7bbf1",
      "name": "Sabriyah",
      "email": "sabriyah@studywave.com",
      "password": "sabriyahe7@Qw",
      "phoneNumber": 9876543214,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:15:31.475+00:00",
      "updatedAt": "2025-04-08T09:15:31.475+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1IiwiZW1haWwiOiI1QGV4YW1wbGUuY29tIn0.e5"
    },
    {
      "_id": "67f4e93f92e54d81ddd7bbf4",
      "name": "Hamsini",
      "email": "hamsini@studywave.com",
      "password": "hamsiniX2&pV",
      "phoneNumber": 9876543215,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:15:43.572+00:00",
      "updatedAt": "2025-04-08T09:15:43.572+00:00",
      "__v": 0,
      "class_id": "67f4ef5892e54d81ddd7bc0b",
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2IiwiZW1haWwiOiI2QGV4YW1wbGUuY29tIn0.f6"
    },
    {
      "_id": "67f4e99e92e54d81ddd7bbf7",
      "name": "Sanjana",
      "email": "sanjana@studywave.com",
      "password": "sanjanagM5#r",
      "phoneNumber": 9876543216,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:17:18.136+00:00",
      "updatedAt": "2025-04-08T09:17:18.136+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3IiwiZW1haWwiOiI3QGV4YW1wbGUuY29tIn0.g7"
    },
    
    {
      "_id": "67f4e9ac92e54d81ddd7bbfa",
      "name": "Tahsin",
      "email": "tahsin@studywave.com",
      "password": "tahsinJ$1nK",
      "phoneNumber": 9876543217,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:17:32.285+00:00",
      "updatedAt": "2025-04-08T09:17:32.285+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4IiwiZW1haWwiOiI4QGV4YW1wbGUuY29tIn0.h8"
    },
    {
      "_id": "67f4e9bc92e54d81ddd7bbfd",
      "name": "Aarit",
      "email": "Aarit@studywave.com",
      "password": "Aaritb!Z4m",
      "phoneNumber": 9876543218,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:17:48.081+00:00",
      "updatedAt": "2025-04-08T09:17:48.081+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5IiwiZW1haWwiOiI5QGV4YW1wbGUuY29tIn0.i9"
    },
    {
      "_id": "67f4ea1692e54d81ddd7bc00",
      "name": "Elina",
      "email": "elina@studywave.com",
      "password": "elinaD3^vL",
      "phoneNumber": 9876543219,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T09:19:18.284+00:00",
      "updatedAt": "2025-04-08T09:19:18.284+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMCIiLCJlbWFpbCI6IjEwQGV4YW1wbGUuY29tIn0.j10"
    },
    {
      "_id": "67f5023957bbba5806a41e71",
      "name": "Dakshit",
      "email": "dakshit@studywave.com",
      "password": "dakshitk9%Fx",
      "phoneNumber": 9876543210,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T11:02:17.292+00:00",
      "updatedAt": "2025-04-08T11:02:17.292+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMSIsImVtYWlsIjoiMTFAZXhhbXBsZS5jb20ifQ.k11"
    },
    {
      "_id": "67f502b757bbba5806a41e76",
      "name": "Arjun",
      "email": "arjun@studywave.com",
      "password": "arjunW@6qT",
      "phoneNumber": 9876543210,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T11:04:23.625+00:00",
      "updatedAt": "2025-04-08T11:04:23.625+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMiIsImVtYWlsIjoiMTJAZXhhbXBsZS5jb20ifQ.l12"
    },
    {
      "_id": "67f5030657bbba5806a41e79",
      "name": "ammar",
      "email": "ammar@studywave.com",
      "password": "ammarzY2#B",
      "phoneNumber": 9876543210,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T11:05:42.446+00:00",
      "updatedAt": "2025-04-08T11:05:42.446+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMyIsImVtYWlsIjoiMTNAZXhhbXBsZS5jb20ifQ.m13"
    },
    {
      "_id": "67f5034f57bbba5806a41e7c",
      "name": "ansh",
      "email": "ansh@studywave.com",
      "password": "anshM4&pN",
      "phoneNumber": 9876543210,
      "isVerifiedUser": true,
      "role": "Student",
      "subjects": [],
      "createdAt": "2025-04-08T11:06:55.420+00:00",
      "updatedAt": "2025-04-08T11:06:55.420+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNCIsImVtYWlsIjoiMTRAZXhhbXBsZS5jb20ifQ.n14"
    },
{
      "_id": "67f0c2cd9e13ec089d600b02",
      "name": "Varun",
      "email": "varun@studywave.com",
      "password": "Varun@123",
      "phoneNumber": 9876543301,
      "role": "Student",
      "subjects": ["Math"],
      "createdAt": "2025-09-15T10:00:00.000+00:00",
      "updatedAt": "2025-09-15T10:00:00.000+00:00",
      "__v": 0,
      "refreshTokken": "eyJhbGciOaUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOaUxNyIsImVtYWlsIjoidmFydW5Ac3R1ZHl3YXZlLmNvbSJ9.v17",
      "isVerifiedUser": true
    }
  ]
  
  const classes = [
    {
      _id: "67f4eef492e54dgerg81ddd7bc03",
      title: "Ryan Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f0c2cd9e13ec089vewd600a79"],
      days: ["Tuesday", "Friday"],
      time: "01:30 PM - 2:30 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/yRrydY1EWP",
      meetingLink: "https://us06web.zoom.us/j/89434444501?pwd=x1panzZa3hU5t1m6xZvf8nGAcKIukN.1",
      meetingId: "894 3444 4501",
      passcode: "516179",
      createdAt: "2025-04-08T09:40:04.054+00:00",
      __v: 0,
      daysAndSubjects: {
        Tuesday: "Math",
        Friday: "Math"
      },
      daysAndBackgroungImg:{
        Tuesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true"
      },
      studentName:"RYAN",
      
    },
    
    {
      _id: "67f0f55a65ggw443faee7cea3ec3f",
      title: "Sahej & Sahana English classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f0c2cd9e13b32fc089d600a72","67f0c2cd9e13ecgj23089d600a72"],
      days: ["Wednesday"],
      time: "04:30 AM - 5:30 AM",
      boardLink:"https://app.idroo.com/boards/RCEKB0PfhX",
      meetingLink: "https://us06web.zoom.us/j/89817558043?pwd=iWXgKtgxJ92X2Z3hDsslyY4qoR8DiL.1",
      recurring: true,
      createdAt: "2025-04-05T09:18:18.073+00:00",
      __v: 0,
      daysAndSubjects: {
       
       Wednesday: "English",
       
      },
      daysAndBackgroungImg:{
       
        Wednesday:"https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true",
        


      },
      studentName:"SAHAJ & SAHAN",
      
    },

    {
      _id: "67f0f55a65gnn2363faee7cea3ec3f",
      title: "Sahej & Sahana Math Classes classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f0c2cd9e13b32fc089d600a72","67f0c2cd9e13ecgj23089d600a72"],
      days: ["Tuesday"],
      time: "04:30 AM - 5:30 AM",
      boardLink:"https://app.idroo.com/boards/GqWUQAPnvA",
      meetingLink: "https://us06web.zoom.us/j/81540588160?pwd=xH9wc6DVnOkxxnPfsgRs75nJbGsXvW.1",
      recurring: true,
      createdAt: "2025-04-05T09:18:18.073+00:00",
      __v: 0,
      daysAndSubjects: {
        Tuesday: "Math",
      },
      daysAndBackgroungImg:{
        Tuesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
      },
      studentName:"SAHAJ & SAHANA",
      
    },
    {
      _id: "67f4eef492e54d81ddd7bc03",
      title: "Skand Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e90892e54d81ddd7bbe8"],
      days: ["Tuesday", "Thursday", "Friday"],
      time: "03:30 AM - 11:00 AM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/tTjYkJlrRy",
      meetingLink: "https://us06web.zoom.us/j/88048172451?pwd=CGEqdHxuf3iSCU2e3nase35DoSOr6M.1",
      meetingId: "880 4817 2451",
      passcode: "745604",
      createdAt: "2025-04-08T09:40:04.054+00:00",
      __v: 0,
      daysAndSubjects: {
        Tuesday: "Math",
        Thursday: "Math",
        Friday: "Math"
      },
      daysAndBackgroungImg:{
        Tuesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Thursday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true"
      },
      studentName:"SKAND",
      
    },
    {
      _id: "67f4ef1392e54d81ddd7bc05",
      title: "darius classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e91792e54d81ddd7bbeb"],
      days: ["Wednesday", "Friday"],
      time: "03:00 PM - 3:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/FuuGlgEZMu",
      meetingLink: "https://us06web.zoom.us/j/89269174339?pwd=3ohdgGTBbW4WnLASmfTdpOrxqljJT3.1",
      meetingId: "892 6917 4339",
      passcode: "551783",
      createdAt: "2025-04-08T09:40:35.105+00:00",
      __v: 0,
      studentName:"DARIUS",
      daysAndSubjects: {
        Wednesday: "Math",
        Friday: "Math"
      },
      daysAndBackgroungImg:{
        Wednesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
      },
    },
    {
      _id: "67f4ef3a92e54d81ddd7bc07",
      title: "Rahil classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e92692e54d81ddd7bbee"],
      days: ["Tuesday", "Wednesday", "Friday"],
      time: "11:00 AM - 12:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/xcGT4zRJXn",
      meetingLink: "https://us06web.zoom.us/j/89498009442?pwd=IN64tBsfw1LRgaEEKQdoy9BL6nXIUr.1",
      meetingId: "894 9800 9442",
      passcode: "101666",
      createdAt: "2025-04-08T09:41:14.814+00:00",
      __v: 0,
      studentName:"RAHIL",
      daysAndSubjects: {
        Tuesday:"Math",
        Wednesday: "Math",
        Friday: "Math"
      },
      daysAndBackgroungImg:{
        Tuesday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Wednesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
      },
      
    },
    {
      _id: "67f4ef4692e54d81ddd7bc09",
      title: "Sabriyah Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e93392e54d81ddd7bbf1"],
      days: ["Tuesday", "Wednesday", "Friday"],
      time: "9:00 AM - 10:00 AM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/1Yaj6WJGXL",
      meetingLink: "https://us06web.zoom.us/j/82904105294?pwd=x545sI8apOTKjVmGHaKXHkwmcqRk7P.1",
      meetingId: "829 0410 5294",
      passcode: "832920",
      createdAt: "2025-04-08T09:41:26.747+00:00",
      __v: 0,
      daysAndSubjects: {
        Tuesday:"Math",
        Wednesday: "Math",
        Friday: "Math"
      },
      daysAndBackgroungImg:{
        Tuesday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Wednesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
      },
      studentName:"SABRIYAH",
      
    },
    {
      _id: "67f4ef5892e54d81ddd7bc0b",
      title: "Hamsini Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e93f92e54d81ddd7bbf4"],
      days: ["Saturday", "Sunday"],
      time: "12:00 PM - 1:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/xMBM3YCeQ4",
      meetingLink: "https://us06web.zoom.us/j/81630487000?pwd=Ps6t3YSKDYXMaTbl6BbmT7UE36iRj5.1",
      meetingId: "816 3048 7000",
      passcode: "807040",
      createdAt: "2025-04-08T09:41:44.578+00:00",
      __v: 0,
      daysAndSubjects: {
        Saturday:"Math",
       Sunday: "Math",
      },
      daysAndBackgroungImg:{
        Saturday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Sunday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        
      },
      studentName:"HAMSINI",
      
    },
    {
      _id: "67f4ef6b92e54d81ddd7bc0d",
      title: "Sanjana classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e99e92e54d81ddd7bbf7"],
      days: ["Saturday", "Sunday", "Monday"],
      time: "5:00 PM - 6:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/8hiT0l1C9l",
      meetingLink: "https://us06web.zoom.us/j/85633535456?pwd=2dBQtpeKhluenpv8XkZna1nRyF0S4b.1",
      meetingId: "856 3353 5456",
      passcode: "225580",
      createdAt: "2025-04-08T09:42:03.736+00:00",
      __v: 0,
      daysAndSubjects: {
        Saturday:"Math",
        Sunday: "Math",
        Monday: "Math"
      },
      daysAndBackgroungImg:{
       Saturday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
       Sunday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
       Monday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
      },
      studentName:"SANJANA",
     

    },
    {
      _id: "67f4ef7a92e54d81ddd7bc0f",
      title: "Tahsin Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e9ac92e54d81ddd7bbfa"],
      days: ["Sunday", "Monday"],
      time: "10:00 AM - 11:00 AM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/a1GZRMqoym",
      meetingLink: "https://us06web.zoom.us/j/85637921196?pwd=2WLn6qr6Cv6ecjf9NaxZ1gi0w1KuFh.1",
      meetingId: "856 3792 1196",
      passcode: "821513",
      createdAt: "2025-04-08T09:42:18.689+00:00",
      __v: 0,
      daysAndSubjects: {
     
       Sunday: "Math",
        Monday: "Math"
      },
      daysAndBackgroungImg:{
        Sunday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Monday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
      },
      studentName:"TAHSIN",
      
    },
    {
      _id: "67f4ef8e92e54d81ddd7bc11",
      title: "Aarit Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e9bc92e54d81ddd7bbfd"],
      days: ["Monday", "Wednesday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/hHCWVM14qT",
      meetingLink: "https://meet.google.com/zvg-egbb-kio",
      meetingId: "zvg-egbb-kio",
      passcode: "446085",
      createdAt: "2025-04-08T09:42:38.174+00:00",
      __v: 0,
      daysAndSubjects: {
        Wednesday:"Math",
        Tuesday:"Math",
      },
      daysAndBackgroungImg:{
        Tuesday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Wednesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
      },
      studentName:"AARIT",
     
    },
    {
      _id: "67f5218f57bbba5806a41e7f",
      title: "Elina Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4ea1692e54d81ddd7bc00"],
      days: ["Tuesday", "Thursday", "Friday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/fOrCI0CEyz",
      meetingLink: "https://us06web.zoom.us/j/84294132398?pwd=oELtf9Upev2Mjjnp3k4gmQZhdVyNfg.1",
      meetingId: "842 9413 2398",
      passcode: "709456",
      createdAt: "2025-04-08T13:15:59.825+00:00",
      __v: 0,
      daysAndSubjects: {
        Tuesday:"Math",
        Thursday: "Math",
        Friday: "Math"
      },
      daysAndBackgroungImg:{
        Tuesday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Thursday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
      },
      studentName:"ELINA",
     
    },
    {
      _id: "67f5219257bbba5806a41e81",
      title: "Dakshit Maths Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f5023957bbba5806a41e71"],
      days: ["Monday", "Wednesday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/6k7SaDx95v",
      meetingLink: "https://us06web.zoom.us/j/89704777152?pwd=TSkedhjIAVKCY618FXo995qTblqNju.1",
      meetingId: "897 0477 7152",
      passcode: "021754",
      createdAt: "2025-04-08T13:16:02.459+00:00",
      __v: 0,
      daysAndSubjects: {
        Monday:"Math",
        Wednesday: "Math",
        
      },
      daysAndBackgroungImg:{
        Monday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Tuesday: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true",
        Wednesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Thursday: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true"
      },
      studentName:"DAKSHIT",
      backgroundImg:"/math.jpg"
    },
    {
      _id: "67f5219257bbba5806a41e81",
      title: "Dakshit English Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f5023957bbba5806a41e71"],
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/HZyyHwfW6H",
      meetingLink: "https://us06web.zoom.us/j/82835581912?pwd=NhWbxCeUNlfqhMUoaoZuvIEpRYZwde.1",
      meetingId: "828 3558 1912",
      passcode: "256977",
      createdAt: "2025-04-08T13:16:02.459+00:00",
      __v: 0,
      daysAndSubjects: {
        Tuesday: "English",
        Thursday: "English"
      },
      daysAndBackgroungImg:{
       
        Tuesday: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true",
        Thursday: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true"
      },
      studentName:"DAKSHIT",
      
    },
    {
      _id: "67f5219457bbba5806a41e83",
      title: "Arjun Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f502b757bbba5806a41e76"],
      days: ["Monday", "Friday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/7b4XqWK20H",
      meetingLink: "https://us06web.zoom.us/j/88428501964?pwd=rSONepQDI7JPYZn9m8a17arwxcG5k1.1",
      meetingId: "884 2850 1964",
      passcode: "927491",
      createdAt: "2025-04-08T13:16:04.102+00:00",
      __v: 0,
      daysAndSubjects: {
        Monday:"Math",
        Friday: "Math"
      },
      daysAndBackgroungImg:{
        Monday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
      },
      studentName:"ARJUN",
      
    },
    {
      _id: "67f5219557bbba5806a41e85",
      title: "Amaar Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f5030657bbba5806a41e79"],
      days: ["Monday", "Thursday", "Friday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/vn05NJhMod",
      meetingLink: "https://us06web.zoom.us/j/81922006806?pwd=FTKOdngD6AEPAQs0eQfarfwKFewpkI.1",
      meetingId: "819 2200 6806",
      passcode: "665543",
      createdAt: "2025-04-08T13:16:05.763+00:00",
      __v: 0,
      daysAndSubjects: {
        Monday:"Math",
        Thursday: "Math",
        Friday: "English"
      },
      daysAndBackgroungImg:{
        Monday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Thursday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Friday: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Yellow%20and%20Red%20Illustrative%20Welcome%20to%20English%20Class%20Intro%20Video.jpg?raw=true"
      },
      studentName:"AMMAR",
      backgroundImg:"/math.jpg"
    },
      {
  _id: "67f4eef492e54d81ddd7bc99",
  title: "Tanisha Maths Class",
  teacher: "67f0c2cd9e13ec089d600b00", // Abhishek's ID
  students: ["67f0c2cd9e13ec089d600b01"], // Tanisha's ID
  days: ["Monday", "Thursday", "Saturday"],
  time: "10:00 PM - 11:00 PM",
  recurring: true,
  boardLink: "https://miro.com/app/board/uXjVJTMqsF4=/",
  meetingLink: "https://meet.google.com/nve-vqeq-coy",
  meetingId: "nve-vqeq-coy",
  passcode: "",
  createdAt: "2025-04-16T09:00:00.000+00:00",
  __v: 0,
  daysAndSubjects: {
    Monday: "Math",
    Thursday: "Math",
    Saturday: "Math"
  },
  daysAndBackgroungImg: {
    Monday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
    Thursday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
    Saturday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"
  },
  studentName: "TANISHA"
},
    {
      _id: "67f5235257bbba5806a41e87",
      title: "Ansh Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f5034f57bbba5806a41e7c"],
      days: ["Monday", "Wednesday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      boardLink:"https://app.idroo.com/boards/WALNInJZoc",
      meetingLink: "https://us06web.zoom.us/j/81827333462?pwd=K7WznzkBNaSNWHW5mbWRnCif4Y6xZ7.1",
      meetingId: "818 2733 3462",
      passcode: "411107",
      createdAt: "2025-04-08T13:23:30.542+00:00",
      __v: 0,
      daysAndSubjects: {
       Monday:"Math",
        Wednesday: "Math",
      },
      daysAndBackgroungImg:{
       Monday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Wednesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        
      },
      studentName:"ANSH",
    
    },
{
      _id: "67f0c2cd9e13ec089d600c00",
      title: "Varun Maths Class",
      teacher: "67f0c2cd9e13ec089d600b00", // Abhishek Rao's ID
      students: ["67f0c2cd9e13ec089d600b02"], // Varun's ID
      days: ["Sunday"],
      time: "2:00 PM - 3:00 PM",
      recurring: true,
      boardLink: "https://miro.com/welcomeonboard/eWlNMjVMMFJtamtFZVBXYm5GamhOTHJrRHZFQU5sektRZTZjSGRPQ3BZcTljSFUra21JMDBYVzZJVUVyMUJzMFV1bVlNWktCcCs0dWgxSWRZcmhoOTE4MC9SZzlGN29qN2dPTnplT3k5WHpPYUo1L0p2Ykh5blJkNEwvRExMRGZQdGo1ZEV3bUdPQWRZUHQzSGl6V2NBPT0hdjE=?share_link_id=676468285660",
      meetingLink: "https://meet.google.com/pok-dfsm-xrd",
      meetingId: "pok-dfsm-xrd",
      passcode: "kuchbhi",
      createdAt: "2025-09-15T10:30:00.000+00:00",
      __v: 0,
      daysAndSubjects: {
        Sunday: "Math",
       
      },
      daysAndBackgroungImg: {
       Sunday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        
      studentName: "VARUN",
    },
  ]

  // Normalize teacherName on every class from the authoritative users list
  // Always overwrite to avoid stale or incorrect values in data
  for (const cls of classes) {
    const t = users.find(u => u._id === cls.teacher);
    cls.teacherName = t?.name || "Unknown";
  }

  export{classes,users}

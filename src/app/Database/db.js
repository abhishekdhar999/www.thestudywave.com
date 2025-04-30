const users = [
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
      "_id": "67f4e8f092e54d81ddd7bbe5",
      "name": "Mohit Tariyal",
      "email": "mohit@studywave.com",
      "password": "1234",
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
    }
  ]
  
  const classes = [
    {
      _id: "67f0f55a653faee7cea3ec3f",
      title: "Sameh classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f0c2cd9e13ec089d600a72"],
      days: ["Thursday", "Wednesday", "Tuesday"],
      time: "04:30 AM - 5:30 AM",
      meetingLink: "https://us05web.zoom.us/j/88641880160?pwd=bVuTMT8xaAarVoAsaMDaKg9FsL91…",
      recurring: true,
      createdAt: "2025-04-05T09:18:18.073+00:00",
      __v: 0,
      daysAndSubjects: {
        Tuesday: "Math",
        Wednesday: "Math",
        Thursday: "Math"
      },
      daysAndBackgroungImg:{
        Tuesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Wednesday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Thursday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"


      },
      studentName:"SAMEH",
      
    },
    {
      _id: "67f4eef492e54d81ddd7bc03",
      title: "Skand Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4e90892e54d81ddd7bbe8"],
      days: ["Tuesday", "Thursday", "Friday"],
      time: "03:30 AM - 11:00 AM",
      recurring: true,
      meetingLink: "https://us05web.zoom.us/j/83401703169?pwd=aZdkQ4kaEur9sgmKgxOQ9OunabqU…",
      meetingId: "834 0170 3169",
      passcode: "QqQp8s",
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
        Friday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg"


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
      meetingLink: "https://zoom.us/j/12345678902",
      meetingId: "12345678902",
      passcode: "physADV",
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
      meetingLink: "https://zoom.us/j/12345678904",
      meetingId: "12345678904",
      passcode: "english",
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
      meetingLink: "https://zoom.us/j/12345678905",
      meetingId: "12345678905",
      passcode: "comp101",
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
      meetingLink: "https://zoom.us/j/12345678908",
      meetingId: "12345678908",
      passcode: "eco101",
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
      meetingLink: "https://zoom.us/j/12345678910",
      meetingId: "12345678910",
      passcode: "codeit",
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
      meetingLink: "https://zoom.us/j/12345678911",
      meetingId: "12345678911",
      passcode: "stats",
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
      days: ["Monday", "Tuesday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      meetingLink: "https://zoom.us/j/12345678912",
      meetingId: "12345678912",
      passcode: "market",
      createdAt: "2025-04-08T09:42:38.174+00:00",
      __v: 0,
      daysAndSubjects: {
        Monday:"Math",
        Tuesday:"Math",
      },
      daysAndBackgroungImg:{
        Tuesday:"https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
        Monday: "https://marketplace.canva.com/EAFUOXXTZtU/1/0/1600w/canva-cute-white-welcome-to-math-class-youtube-intro-video-q2opAt8zpiM.jpg",
      },
      studentName:"AARIT",
     
    },
    {
      _id: "67f5218f57bbba5806a41e7f",
      title: "Elina's Clasees",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f4ea1692e54d81ddd7bc00"],
      days: ["Tuesday", "Thursday", "Friday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      meetingLink: "https://zoom.us/j/12345678912",
      meetingId: "12345678912",
      passcode: "market",
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
      title: "Dakshit's Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f5023957bbba5806a41e71"],
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      meetingLink: "https://zoom.us/j/12345678912",
      meetingId: "12345678912",
      passcode: "market",
      createdAt: "2025-04-08T13:16:02.459+00:00",
      __v: 0,
      daysAndSubjects: {
        Monday:"Math",
        Tuesday: "English",
        Wednesday: "Math",
        Thursday: "English"
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
      _id: "67f5219457bbba5806a41e83",
      title: "Arjun's Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f502b757bbba5806a41e76"],
      days: ["Monday", "Friday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      meetingLink: "https://zoom.us/j/12345678912",
      meetingId: "12345678912",
      passcode: "market",
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
      title: "Ammar's Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f5030657bbba5806a41e79"],
      days: ["Monday", "Thursday", "Friday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      meetingLink: "https://zoom.us/j/12345678912",
      meetingId: "12345678912",
      passcode: "market",
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
      _id: "67f5235257bbba5806a41e87",
      title: "Ansh's Classes",
      teacher: "67f4e8f092e54d81ddd7bbe5",
      students: ["67f5034f57bbba5806a41e7c"],
      days: ["Monday", "Wednesday"],
      date: "2025-03-24T00:00:00.000+00:00",
      time: "4:00 PM - 5:00 PM",
      recurring: true,
      meetingLink: "https://zoom.us/j/12345678912",
      meetingId: "12345678912",
      passcode: "market",
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
  ];

  export{classes,users}
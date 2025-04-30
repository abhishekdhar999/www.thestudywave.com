// pages/create-meeting.js
import { useState } from "react";
import { DynaPuff } from "next/font/google";

const DynaPuffs = DynaPuff({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function CreateMeetingPage({classData}) {
//   const [joinUrl, setJoinUrl] = useState("");
//   const [startUrl, setStartUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const subjectForToday = classData.daysAndSubjects[today];
  const backgroundImgForToday = classData.daysAndBackgroungImg[today];

  const handleCreateMeeting = async () => {
    setLoading(true);
    setError("");
    console.log("in");
    try {
      const res = await axios.post("http://localhost:3001/meeting/createmeeting");

      console.log("res",res)
    //   setJoinUrl(res.data.join_url);
    //   setStartUrl(res.data.start_url);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create meeting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    


    



{/* new */}

<div
    className="max-w-6xl     sm:mx-auto md:mx-18 lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-[340px] overflow-hidden">
    <img
  className="object-cover object-top w-full" 
  src={backgroundImgForToday} 
  alt="Mountain" 
  width={500} 
  height={300} 
/>
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        {/* <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front'/> */}
    </div>
    <div className="text-center mt-2">
        <h2 className={` text-2xl font-serif  ${DynaPuffs.className}`}>{classData.title}</h2>
        <p className="text-gray-500 text-2xl ">Subject : <span className="font-bold text-black">{subjectForToday}</span></p>
    </div>

    <div className="svgs flex justify-center flex-col md:flex-row pt-4"> 

<p className=" text-lg font-bold flex items-center justify-center text-blue-950 mx-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" width={36} height={36}>
    <g data-name="Layer 7">
      <path d="M318.586 28.226a6.369 6.369 0 0 0-6.367 6.26l-2.292 135.2h17.319l-2.293-135.2a6.367 6.367 0 0 0-6.367-6.26z" style={{ fill: "#dde5f4" }} />
      <path d="M287.528 192.289A204.072 204.072 0 0 1 303 168.136a16.682 16.682 0 0 1 24.99-1.817 76.211 76.211 0 0 1 3.8 4.008 16.78 16.78 0 0 1 1.464 20.421l-18.071 27.141s-19.383-9.504-27.655-25.6z" style={{ fill: "#ffd4ca" }} />
      <path d="M130.667 330h21.925a64.126 64.126 0 0 1 31.75 0h21.926l5.694-27.51h-86.669z" style={{ fill: "#464659" }} />
      <path style={{ fill: "#ffc676" }} d="M152.592 306.97h31.749V330h-31.749z" />
      <path d="M136.057 145.677h64.82s10 66.02 9.677 162c0 0-36.138 7.835-84.833 0 0 .004-7.354-70.987 10.336-162z" style={{ fill: "#fff" }} />
      <path d="M210.554 307.681c.008-2.227.008-4.431 0-6.625-18.416.7-31.373-.955-39.811-2.834a14.991 14.991 0 0 1-11.676-15.964l10.3-115.952-12.408-20.629h-20.902c-17.69 91.013-10.336 162-10.336 162 48.695 7.839 84.833.004 84.833.004z" style={{ fill: "#dde5f4" }} />
      <path d="M200.877 145.677h-64.82q-1.444 7.433-2.667 14.675c1.012 1.857 8.314 14.848 18.269 22L168.279 170l15.7 12.35s10.19-5.014 19.152-18.887c-1.302-11.5-2.254-17.786-2.254-17.786z" style={{ fill: "#dde5f4" }} />
      <path d="m155.6 233.875-3.013 36.466 15.875 15.595 15.875-15.595-6.067-73.424c-9.098 9.376-16.576 21.845-22.67 36.958z" style={{ fill: "#7ba7ec" }} />
      <path style={{ fill: "#6c83d6" }} d="m178.275 196.917-3.73-45.152H162.39l-6.785 82.11 22.67-36.958z" />
      <path d="M186.2 135.319h-35.465l-14.678 10.358a94.94 94.94 0 0 0 16.178 24.158l16.232-15.205 16.233 15.205a94.94 94.94 0 0 0 16.178-24.158z" style={{ fill: "#fff" }} />
      <path style={{ fill: "#ffd4ca" }} d="M150.735 125.2v10.119l17.732 19.311 17.732-19.311v-9.435l-35.464-.684z" />
      <path d="M150.735 125.2c12.206 5.619 27.894 5.718 35.464.684v-13.1h-35.464z" style={{ fill: "#f99c9c" }} />
      <path d="M136.057 145.677s-.944 26.1-2.074 61.36c-4.112 16.627-4.1 35.026-1.649 54.471-.667 23.58-1.274 47.554-1.667 68.492l-38.924-.018s-6.9-57.608-.146-111.131c1.1-8.747 2.111-17.384 2.963-25.643a45.035 45.035 0 0 1 18.928-32.256c7.358-5.161 15.833-10.984 22.569-15.275z" style={{ fill: "#e0898d" }} />
      <path d="M132.334 261.508c.3-10.7.618-21.321.931-31.541l-38.434-4.33-4.231.947c-6.722 51.19-16.068 103.39-16.068 103.39l17.956.009a12.8 12.8 0 0 0 12.807-12.8v-41.5c7.243-6.4 6.963-16.141 6.963-16.141 6.796-1.024 15.293.727 20.076 1.966z" style={{ fill: "#b45f6d" }} />
      <path d="M287.528 192.289 267.52 222.2l-34.393-49.079a74.13 74.13 0 0 0-19.23-18.913 586.832 586.832 0 0 0-13.02-8.535s4.01 110.854 5.391 184.323h28.986s-1.186-39.962-3.558-84.595l30.681 24.711a13.724 13.724 0 0 0 20.026-3.074l32.782-49.153z" style={{ fill: "#e0898d" }} />
      <path d="M3.964 207.17s50.214-20.313 70.568 25.342l-55.479-6.191S14.8 212.78 3.964 207.17zM145.1 207.17s-50.214-20.313-70.568 25.342l59.22-4.092s.514-15.64 11.348-21.25z" style={{ fill: "#fff" }} />
      <path d="M74.532 232.512S48.826 209.469 8.1 226.99a5.251 5.251 0 0 0-3.165 4.822v16.359a2.824 2.824 0 0 0 4.1 2.525c9.677-4.94 35.406-15.034 65.5-2.128 30.1-12.906 55.825-2.812 65.5 2.128a2.824 2.824 0 0 0 4.1-2.525v-16.359a5.251 5.251 0 0 0-3.165-4.822c-40.733-17.521-66.438 5.522-66.438 5.522z" style={{ fill: "#ffc676" }} />
      <path d="M57.4 264.213v47.7A18.086 18.086 0 0 0 75.488 330a18.086 18.086 0 0 0 18.086-18.086v-53.831z" style={{ fill: "#e0898d" }} />
      <path d="M62.439 241.868h24.186a14.982 14.982 0 0 1 14.982 14.982 18.835 18.835 0 0 1-18.835 18.835H66.291a18.835 18.835 0 0 1-18.835-18.835 14.982 14.982 0 0 1 14.982-14.982z" style={{ fill: "#ffd4ca" }} />
      <path d="M126.326 71.629h10.235v27.327h-10.235a11.445 11.445 0 0 1-11.445-11.445v-4.437a11.445 11.445 0 0 1 11.445-11.445z" style={{ fill: "#f99c9c" }} />
      <path d="M208.278 71.629h10.235v27.327h-10.235a11.445 11.445 0 0 1-11.445-11.445v-4.437a11.445 11.445 0 0 1 11.445-11.445z" transform="rotate(180 207.673 85.293)" style={{ fill: "#f99c9c" }} />
      <path d="M140.386 25.455a23.368 23.368 0 0 0-21.874 8.945c-8.553 10.727-11.676 35.063 18.129 47.7l64.751-9.734a64.583 64.583 0 0 0 11.237.7c6.007-.148 11.717-6.8 11.693-12.81a24.837 24.837 0 0 0-2.761-10.608 48.24 48.24 0 0 1-4.138-13.242C215.862 26.68 208.866 10 179.242 10c-30.429 0-38.856 15.455-38.856 15.455z" style={{ fill: "#595975" }} />
    </g>
  </svg>

    <span className="ml-4 font-serif text-blue-950">MOHIT TARIYAL</span> 
</p>

<p className=" text-blue-950 font-bold text-lg lg:text-lg flex items-center justify-center mx-2 ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={36} height={36}>
<g data-name="Girl Graduation">
<path
d="M11 44.81c-4.42-14.56 4.37-13.73 4.02-22.32-.226-5.589 6.503-10.751 6.501-10.754L32 7.75l10.479 3.995c.015-.002 6.727 5.151 6.501 10.745-.35 8.59 8.44 7.76 4.02 22.32z"
style={{ fill: "#343544" }}
/>
<path
d="M52.1 44.35 38 38a6 6 0 0 1-12 0l-14.1 6.35A9.992 9.992 0 0 0 6 53.47V62a1 1 0 0 0 1 1h50a1 1 0 0 0 1-1v-8.53a9.992 9.992 0 0 0-5.9-9.12z"
style={{ fill: "#494a59" }}
/>
<path
d="M50.28 43.53C47.09 49.27 39.87 53 32 53s-15.09-3.73-18.28-9.47L26 38a6 6 0 0 0 12 0z"
style={{ fill: "#ea972a" }}
/>
<path
d="M47.53 42.29C44.88 46.83 38.93 50 32 50s-12.88-3.17-15.53-7.71L26 38a6 6 0 0 0 12 0z"
style={{ fill: "#fcd354" }}
/>
<path
d="M38 32.71V38a6.009 6.009 0 0 1-6 6 6.005 6.005 0 0 1-6-6v-5.3a8.978 8.978 0 0 0 11.99.01zM43 23h-2v3a9.356 9.356 0 0 1-.22 2H43a2.006 2.006 0 0 0 2-2v-1a2.006 2.006 0 0 0-2-2zM23 23h-2a2.006 2.006 0 0 0-2 2v1a2.006 2.006 0 0 0 2 2h2.22a9.356 9.356 0 0 1-.22-2z"
style={{ fill: "#eac2b9" }}
/>
<path
d="M17 1v10.798a.995.995 0 0 0 1.181.975 76.484 76.484 0 0 1 27.638 0A.995.995 0 0 0 47 11.798V1z"
style={{ fill: "#494a59" }}
/>
<path
d="M23 18.848V26a9 9 0 0 0 9 9 9 9 0 0 0 9-9v-5c-9.894-.283-14-5-14-5a5.742 5.742 0 0 1-4 2.848z"
style={{ fill: "#ffddd4" }}
/>
<path
d="M54.164 44.364c2.451-8.683.173-12.1-1.857-15.11-1.319-1.954-2.456-3.642-2.33-6.72.138-3.355-1.918-6.495-3.832-8.669.22.042.44.072.659.116a1 1 0 0 0 .83-.208A1 1 0 0 0 48 13V2h4v14a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1H11a1 1 0 0 0 0 2h5v11a1 1 0 0 0 1.196.98c.22-.044.44-.073.66-.115-1.915 2.173-3.97 5.312-3.833 8.668.126 3.078-1.011 4.767-2.33 6.721-2.03 3.01-4.308 6.427-1.857 15.109A11.016 11.016 0 0 0 5 53.466V63a1 1 0 0 0 2 0v-9.534a9.013 9.013 0 0 1 5.307-8.207l1.021-.46C16.89 50.414 24.097 54 32 54s15.11-3.586 18.672-9.2l1.021.46A9.013 9.013 0 0 1 57 53.465V63a1 1 0 0 0 2 0v-9.534a11.016 11.016 0 0 0-4.836-9.102zM46 2v9.79a80.584 80.584 0 0 0-14-1.283 80.71 80.71 0 0 0-14 1.283V2zM32 52c-7.112 0-13.583-3.12-16.835-8.027l.93-.419C19.192 48.102 25.317 51 32 51s12.807-2.898 15.906-7.446l.93.419C45.582 48.88 39.111 52 32 52zm-6.84-12.525a6.997 6.997 0 0 0 13.681 0l7.21 3.244C43.258 46.565 37.887 49 32 49s-11.258-2.435-14.05-6.28zM22.05 27H21a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v2c0 .338.018.671.05 1zM24 26v-6.389a6.967 6.967 0 0 0 3.166-2.09c1.684 1.395 5.746 4.021 12.834 4.437v4.043a8 8 0 1 1-16 0zm18-2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1.05c.032-.329.05-.662.05-1zM32 36a9.927 9.927 0 0 0 5-1.353V38a5 5 0 0 1-10 0v-3.353a9.925 9.925 0 0 0 5 1.354zm7 1.353V33.13A10.011 10.011 0 0 0 41.539 29H43a3.003 3.003 0 0 0 3-3v-1a3.003 3.003 0 0 0-3-3h-1v-.999a1 1 0 0 0-.972-1c-9.273-.267-13.238-4.618-13.274-4.658a.994.994 0 0 0-.89-.33 1.009 1.009 0 0 0-.77.563 4.759 4.759 0 0 1-3.307 2.294 1 1 0 0 0-.787.978V22h-1a3.003 3.003 0 0 0-3 3v1a3.003 3.003 0 0 0 3 3h1.461A10.01 10.01 0 0 0 25 33.13v4.223L11.632 43.37c-2.01-7.441-.201-10.149 1.72-12.996 1.387-2.058 2.823-4.187 2.67-7.921-.16-3.909 3.693-7.789 5.21-9.16a74.903 74.903 0 0 1 21.536 0c1.519 1.373 5.37 5.254 5.21 9.16-.153 3.734 1.283 5.863 2.67 7.921 1.92 2.847 3.73 5.555 1.72 12.996z"
style={{ fill: "#231e23" }}
/>
<path
d="M48 54a1 1 0 0 0-2 0v3a1 1 0 0 0 .293.707A5.793 5.793 0 0 1 48 61.829V63a1 1 0 0 0 2 0v-1.171a7.771 7.771 0 0 0-2-5.227zM17 53a1 1 0 0 0-1 1v2.602a7.771 7.771 0 0 0-2 5.227V63a1 1 0 0 0 2 0v-1.171a5.793 5.793 0 0 1 1.707-4.122A1 1 0 0 0 18 57v-3a1 1 0 0 0-1-1z"
style={{ fill: "#231e23" }}
/>
</g>
</svg> <span className="ml-4  font-serif ">{classData.studentName}</span>
</p>
</div>

    
    <div className="p-4 border-t mx-8 mt-2 flex justify-center md:gap-24 md:flex-row flex-col">
    <div type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Join Class</div>

    <div type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Open Whiteboard</div>
    </div>
    </div>
    </>
  );
}
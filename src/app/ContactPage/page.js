"use client"
 import React from "react";
 import { useRef } from 'react';
 import emailjs from '@emailjs/browser';
 import { useState } from 'react';
import Navbar from "../Component/Navbar/Navbar";
// app/Contact/page.tsx or page.jsx

const ContactPage = () => {

    const form = useRef();
    const [email,sentEmail] =  useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
      const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        emailjs
          .sendForm('service_9lhl04s', 'template_fqxwpac', form.current, {
            publicKey: 'Edx992LRTWUW6Lwp8',
          })
          .then(
            () => {
              setIsSending(false);
              console.log('SUCCESS!');
              
              sentEmail(true);
              setFormData({ name: '', email: '', message: '' }); // Reset form data
    
             
                setTimeout(() => {
                  sentEmail(false); // Reset email state after 5 seconds
                  // setIsSending(false);
                }, 5000)
              
              
            },
            (error) => {
              console.log('FAILED...', error.text);
              setIsSending(false);
            },
          );
      };
      const buttonStyle = {
        opacity: isSending || email ? 0.5 : 1,  // Conditional opacity
        cursor: isSending || email ? 'not-allowed' : 'pointer'  // Conditional cursor
    };
    
    const handleInputChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
    };
    return (
        <>
        <Navbar></Navbar>
        <div className="max-w-screen-lg mx-auto my-20 p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
            <div className="bg-orange-400 md:col-span-4 p-10 text-white rounded-4xl">
                <p className="mt-4 text-sm leading-7 font-regular uppercase">
                    Contact
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                    Get In <span className="text-indigo-600">Touch</span>
                </h3>
                <p className="mt-4 leading-7 text-gray-200">
                At StudyWave, we understand how important your childs education is. If you have any questions or need assistance, feel free to reach out. Our team is committed to providing the best support and guidance to ensure your childs learning journey is smooth and successful. Were here for you every step of the way!
                </p>
    
                <div className="flex items-center mt-5">
                    <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/a8cc17765aea77f0f07cbbe1bd4a708a1e2901b1/address.svg" alt="" className="h-12" />
                    <span className="text-sm font-extrabold mx-4">Office #147, Street #1,BingBang Tower Punjab,India.</span>
                </div>
                <div className="flex items-center mt-5">
                   <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/a8cc17765aea77f0f07cbbe1bd4a708a1e2901b1/phone.svg" alt="" className="h-12"/>
                    <span className="text-sm font-extrabold mx-4">+91 7740064839</span>
                </div>
                <div className="flex items-center mt-5">
                    <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/a8cc17765aea77f0f07cbbe1bd4a708a1e2901b1/24*7.svg" alt="" className="h-12" />
                    <span className="text-sm font-extrabold mx-4">24/7</span>
                </div>
    
            </div>
            <form ref={form} onSubmit={sendEmail} className="md:col-span-8 p-10">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name">
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="Jane"
                            name="name"
                            required = "true"
                value={formData.name}
                onChange={handleInputChange}/>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    {/* <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name" type="text" placeholder="Doe"/>
                    </div> */}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Email Address
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email" type="email" placeholder="********@*****.**" 
                            name="email"
                            required = "true"
                value={formData.email}
                onChange={handleInputChange}/>
                    </div>
                </div>
    
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password">
                            Your Message
                        </label>
                        <textarea rows="10"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required = "true"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                    </div>
                    <div className="flex justify-between w-full px-3">
                        <div className="md:flex md:items-center">
                            <label className="block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox"/>
                                <span className="text-sm">
                                    Send me your newsletter!
                                </span>
                            </label>
                        </div>
                        <button
                        disabled={isSending || email}
                            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                            type="submit">
                           {isSending ? 'Sending Message...' : (email ? 'Email Sent Successfully' : 'Send Message')}
                        </button>
                    </div>
    
                </div>
    
            </form>
    
        </div>
    </div>
    </>
    );
  };
  
  export default ContactPage;
  









// Studywave@mohit26
// Edx992LRTWUW6Lwp8
// E9Pqybu3-FHtekJJW1qcB
// thestudywave.com@gmail.com
// service id :service_9lhl04s
// template id : template_fqxwpac



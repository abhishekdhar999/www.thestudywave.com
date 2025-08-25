"use client"
 import React from "react";
 import { useRef } from 'react';
 import emailjs from '@emailjs/browser';
 import { useState } from 'react';
import Navbar from "../Component/Navbar/Navbar";
import WhatsAppButton from "../Component/WhatsAppButton";
import { Footer } from "../Component/Footer";
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

    {/* WhatsApp Connection Section */}
    <div className="max-w-screen-lg mx-auto my-16 p-5">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="mb-6">
                <svg 
                    className="w-16 h-16 mx-auto text-green-500 mb-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Connect with us on WhatsApp</h3>
                <p className="text-green-600">Quick questions? Just say hello!</p>
            </div>
                         <div className="flex justify-center">
                 <WhatsAppButton 
                     phoneNumber="+917740064839"
                     message="Hello! 👋"
                     className="bg-green-500 hover:bg-green-600 text-lg px-8 py-4"
                 />
             </div>
                 </div>
     </div>
     
     {/* Footer */}
     <Footer />
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



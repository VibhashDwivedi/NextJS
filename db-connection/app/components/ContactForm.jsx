"use client";

import { useState } from "react";

const ContactForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fullname, email, message);
     
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullname, email, message }),
        });

        };
  return (

    

    <div>
      <form className="border p-2" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="fullname">Full Name : </label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter Your Name"
            className="border-2 p-1"
            style={{ width: "90%", outline: "none" }}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="border-2 p-1"
            style={{ width: "90%", outline: "none" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="message">Message : </label>
          <textarea
            id="message"
            placeholder="Enter Your Message"
            className="border-2 p-1"
            style={{ width: "90%", outline: "none" }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2 button rounded">Submit</button>
      </form>
      <div>
       {error}
      </div>
    </div>
  );
};

export default ContactForm;

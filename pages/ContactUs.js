import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      subject,
      message,
    };

    await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setName("");
        setEmail("");
        setSubject("");
        setSubmit(true);
        setBody("");
      }
    });
  };

  return (
    <Layout title="ContactUs">
      <div>
        <div className="container text-center my-12">
          <h3 className="font-bold text-4xl mb-7">
            Let's explore business opportunities together.
          </h3>
          <p className="text-xl">
            Tell us where you are and where you want to be. 
          </p>
          <p className="text-xl">We’ll be glad to take you there.</p>
        </div>
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className=" flex flex-col justify-around md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[rgb(7,39,78)] w-full max-w-6xl p-8 rounded-xl shadow-lg text-white">
            <div className="flex flex-col justify-around">
              <div>
                <h3 className="font-bold text-4xl">
                  Reinvent your experience with us
                </h3>
              </div>
              <div className="flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">
                    <GoLocation />
                  </span>
                  <p className="text-xl">
                    3 Westron Close, Lekki Phase 1, Lagos State.
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-0">
                  <span className="text-2xl">
                    <HiOutlineMailOpen />
                  </span>
                  <p className="text-xl">team@elanafrica.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl text-gray-600 md:w-100">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label>Names</label>
                  <input
                    required
                    type="text"
                    placeholder=" Your fullNames"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    required
                    type="Email"
                    placeholder="Enter your email address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your email address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    required
                    placeholder="Message"
                    row="5"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus-none"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block self-start bg-[rgb(7,39,78)] text-white font-bold rounded-md px-6 py-2 text-lg"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;

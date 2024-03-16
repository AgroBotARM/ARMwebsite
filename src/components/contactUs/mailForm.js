import React, { useState } from "react";
import { AgrobotEmailIcon, AgrobotFacebookIcon, AgrobotInstagramIcon,AgrobotLinkedInIcon, AgrobotLocationIcon } from "../../assets";
import { APPLICATION_LINK } from "../../constant/recruitment";
import { MdChevronRight } from "react-icons/md";

function MailForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { isMobile } = props;

  

  if (!isMobile) {
    return (
      <div
        className="mx-auto bg-[#F8F7F1] border border-gray-300 rounded-md p-4 w-4/5 flex items-center justify-center"
        style={{ display: "flex", height: "55vh", width: "75%"}}
      >
        <div style={{ width: "120%" }}>
          <div className="w-4/5 max-h-full p-4">
            <div className="flex flex-col items-left justify-left w-full h-full">
              <h1 className="text-3xl font-bold text-left text-[#4C5934] ml-4">
                Message Us
              </h1>

              <form className="flex flex-col items-left justify-center w-full h-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="subject"
                  placeholder="Subject"
                  className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <input
                  placeholder="Message"
                  className="w-full h-8 px-4 my-6 mr-2 ml-4 bg-[#F8F7F1] border-b border-black"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
              className="mx-auto bg-[#88BE22] text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold my-4 hover:bg-green-500 transition-all duration-300"
              onClick={() => window.open(APPLICATION_LINK, "_blank")}
            >
              Send <MdChevronRight />
            </button>
              </form>
            </div>
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <div className="flex flex-wrap justified-center items-left flex-col w-full">
            <div className="w-[180px] h-[140px] bg-[#F8F7F1] border border-gray-300 rounded-md">
            <a target="_blank" href="mailto:ubcagrobot@gmail.com">
                <img
                  src={AgrobotEmailIcon}
                  alt="EmailSideIcon"
                  className="w-[50px] h-[40px] mt-3 mx-auto "
                />
              </a>
              <h1 className="text-[18px] text-center font-bold mt-2">Email</h1>
              <p className="text-[12px] text-[#3A3A3A] font-bold roboto-custom text-center mt-1">ubcagrobot@gmail.com</p>
            
            </div>
            <div className="w-[180px] h-[140px] bg-[#F8F7F1] border border-gray-300 rounded-md mt-6" style={{position: "relative"}}>
              <h1 className="text-[18px] text-center font-bold mt-3">Social Media</h1>
              <p className="text-[12px] text-[#3A3A3A] font-bold roboto-custom text-center mt-2">Feel free to connect with us on Social Media! </p>
              <div className="flex" style={{position: "absolute", bottom: 7, right: 14}}>
              <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <img
                    src={AgrobotFacebookIcon}
                    alt="FacebookIcon"
                    className="w-[40px] h-[40px] mr-3 mr-1 mx-auto"
                  />
                  </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <img
                    src={AgrobotInstagramIcon}
                    alt="InstagramIcon"
                    className="w-[40px] h-[40px] mr-1 mx-auto"
                  />
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <img
                    src={AgrobotLinkedInIcon}
                    alt="LinkedInIcon"
                    className="w-[40px] h-[40px] ml-3 mx-auto"
                  />
                </a>
              </div>
            </div>
              <div className="w-[180px] h-[140px] bg-[#F8F7F1] border border-gray-300 rounded-md mt-6">
                <a target="_blank" href="https://maps.app.goo.gl/Wi2BrKJZQ9gQ2Bdx5">
                  <img
                    src={AgrobotLocationIcon}
                    alt="LocationIcon"
                    className="w-[45px] h-[38px] mt-1 mx-auto"
                  />
                </a>
                <h1 className="text-[18px] text-center font-bold">Location</h1>
                <p className="text-[11px] text-[#3A3A3A] font-bold roboto-custom text-center" > University of British Columbia </p>
                <p className="text-[11px] text-[#3A3A3A] font-bold roboto-custom text-center"> 2370 E Mall </p>
                <p className="text-[11px] text-[#3A3A3A] font-bold roboto-custom text-center"> Vancouver, BC </p>
                <p className="text-[11px] text-[#3A3A3A] font-bold roboto-custom text-center"> V6T 1Z3 </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-4/5 h-full bg-[#F8F7F1] mx-auto rounded-md lg:p-8">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl font-bold text-center text-[#4C5934] mb-2 mt-2">
            Message Us!
          </h1>
          <form className="flex flex-col items-center justify-center w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-[80%] lg:w-4/5 h-12 px-4 my-2 border-2 border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[80%] lg:w-4/5 h-12 px-4 my-2 border-2 border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="subject"
              placeholder="Subject"
              className="w-[80%] lg:w-4/5 h-12 px-4 my-2 border-2 border-gray-300 rounded-md"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="w-[80%] lg:w-4/5 h-48 px-4 py-2 my-2 border-2 border-gray-300 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="mx-auto bg-[#88BE22] text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold my-4 hover:bg-green-500 transition-all duration-300"
              onClick={() => window.open(APPLICATION_LINK, "_blank")}
            >
              Send <MdChevronRight />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MailForm;

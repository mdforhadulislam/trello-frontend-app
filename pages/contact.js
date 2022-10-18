import emailjs from "@emailjs/browser";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Layout from '../Components/Layout';
import HalfCircel from "../public/icon/circel-svg.svg";
import EmailIcon from '../public/icon/email-icon.svg';
import HomeIcon from '../public/icon/home-icon.svg';
import LongDotIcon from "../public/icon/long-dot-svg.svg";
import PhoneIcon from '../public/icon/phone-icon.svg';
import SquireDotIcon from "../public/icon/squir-dot-svg.svg";
import { run_sprinner, stop_sprinner } from '../Redux/actions/sprinner';


const Contact = () => {
  const form = useRef();
  const [contactMessage, setContactMessage] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const dispatch = useDispatch()

  const changeHendler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactMessage({
      ...contactMessage,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (contactMessage.name === "") toast.error("Enter Your name");
    if (contactMessage.email === "") toast.error("Enter Your email");
    if (contactMessage.phone === "") toast.error("Enter Your phone");
    if (contactMessage.message === "") toast.error("Enter Your message");
    if (
      contactMessage.name !== "" &&
      contactMessage.email !== "" &&
      contactMessage.message !== "" &&
      contactMessage.phone !== ""
      ) {
        dispatch(run_sprinner())
      emailjs
        .sendForm(
          "service_e5x6sfq",
          "template_ztacwd4",
          form.current,
          "2m5m5hHUGTZUlIfqT"
        )
        .then((result) => {
          toast.success("successfuly send email");
          setContactMessage({ name: "", email: "", phone: "", message: "" });
          dispatch(stop_sprinner())
        });
    }
  };

  return (
    <Layout title={"Contact"}>
      <div className="bg-white py-12 lg:py-[50px] overflow-hidden relative z-10">
      <div className="container m-auto">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
            <div className="max-w-[570px] mb-12 lg:mb-0">
              <h2
                className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
              >
                GET IN TOUCH WITH US
              </h2>
              <p className="text-base text-body-color leading-relaxed mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>
              <div className="flex mb-8 max-w-[370px] w-full">
                <div
                  className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     "
                >
                  <Image width={"40"}height={"40"} src={HomeIcon} alt={""} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-dark text-xl mb-1">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color">
                    99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                  </p>
                </div>
              </div>
              <div className="flex mb-8 max-w-[370px] w-full">
                <div
                  className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     "
                >
                   <Image width={"40"}height={"40"} src={PhoneIcon} alt={""} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-dark text-xl mb-1">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </div>
              <div className="flex mb-8 max-w-[370px] w-full">
                <div
                  className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     "
                >
                   <Image width={"40"}height={"40"} src={EmailIcon} alt={""} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-dark text-xl mb-1">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color">
                    info@yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    value={contactMessage.name}
                    onChange={changeHendler}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    name="email"
                    value={contactMessage.email}
                    onChange={changeHendler}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    name="phone"
                    value={contactMessage.phone}
                    onChange={changeHendler}
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                    name="message"
                    value={contactMessage.message}
                    onChange={changeHendler}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                        w-full
                        text-white
                        bg-[#3056d3]
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute -top-10 -right-9 z-[-1]">
                <Image width={"150"}height={"150"} src={HalfCircel} alt={""} />
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                <Image width={"200"}height={"250"} src={LongDotIcon} alt={""} />

                </span>
                <span className="absolute -left-7 -bottom-7 z-[-1]">
                <Image width={"200"}height={"200"} src={SquireDotIcon} alt={""} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;
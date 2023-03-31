import { useRef, useState } from "react";

import Image from "next/image";
import iconError from "../assets/contact/desktop/icon-error.svg";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [showErrorMsg, setShowErrorMsg] = useState(false);

  // Refs for input fields focusing
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setShowErrorMsg(true);
    } else {
      // at this point a post req should go to a server.

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setShowErrorMsg(false);
    }
  };

  return (
    <div className=" bg-peach bg-[url('../assets/shared/desktop/bg-pattern-two-circles.svg')] bg-no-repeat px-[2.4rem] py-[7.2rem] text-white outline sm:mx-[4rem] sm:rounded-2xl sm:px-[3.8rem] md:px-[5.8rem] xl:mx-[16.5rem] xl:flex xl:justify-between  xl:py-[5.4rem] xl:px-[9.5rem]">
      <div className="mb-[3.7rem] text-center  sm:text-left xl:m-0 xl:w-[445px] xl:pt-[8.0rem]">
        <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] sm:mb-[3.2rem] sm:text-[4.8rem] sm:leading-[4.8rem]">
          Contact Us
        </p>
        <p className="text-[1.5rem]  font-normal leading-[2.5rem] sm:text-[1.6rem] sm:leading-[2.6rem]">
          Ready to take it to the next level? Let&apos;s talk about your project
          or idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that&apos;s relatable to your
          users, drop us a line.
        </p>
      </div>

      {/* Check form specifics for match with design */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-[1.5rem] font-normal leading-[2.6rem]  xl:w-[380px]   "
      >
        <div
          className="flex  border-b-[1px] border-white
"
        >
          <input
            className=" flex-1 bg-transparent  px-[1.377rem] pb-[1.1rem] pt-[2.5rem] placeholder-white placeholder-opacity-50 outline-none"
            type="text"
            id="name"
            placeholder="Name"
            onChange={handleNameChange}
            value={name}
            ref={nameRef}
          />
          {showErrorMsg && !name && (
            <p
              onClick={() => {
                nameRef.current?.focus();
              }}
              className=" pt-[2.5rem]  text-[1.2rem] font-normal italic leading-[2.6rem]"
            >
              Can&apos;t be empty
              <Image
                className="ml-[0.9rem] inline-block"
                src={iconError}
                alt="error"
              />
            </p>
          )}
          {/* <ErrorMsg />{" "} */}
        </div>

        <div
          className="flex  border-b-[1px] border-white
"
        >
          {" "}
          <input
            className=" flex-1 bg-transparent  px-[1.377rem] pb-[1.1rem] pt-[2.5rem] placeholder-white placeholder-opacity-50 outline-none"
            type="email"
            id="email"
            placeholder="Email Address"
            onChange={handleEmailChange}
            value={email}
            ref={emailRef}
          />
          {showErrorMsg && !email && (
            <p
              onClick={() => {
                emailRef.current?.focus();
              }}
              className="pt-[2.5rem] text-[1.2rem] font-normal italic leading-[2.6rem]"
            >
              Can&apos;t be empty
              <Image
                className="ml-[0.9rem] inline-block"
                src={iconError}
                alt="error"
              />
            </p>
          )}
        </div>

        <div
          className="flex  border-b-[1px] border-white
"
        >
          {" "}
          <input
            className=" flex-1 bg-transparent  px-[1.377rem] pb-[1.1rem] pt-[2.5rem] placeholder-white placeholder-opacity-50 outline-none"
            type="number"
            id="phone"
            placeholder="Phone"
            onChange={handlePhoneChange}
            value={phone}
            ref={phoneRef}
          />
          {showErrorMsg && !phone && (
            <p
              onClick={() => {
                phoneRef.current?.focus();
              }}
              className="pt-[2.5rem] text-[1.2rem] font-normal italic leading-[2.6rem]"
            >
              Can&apos;t be empty
              <Image
                className="ml-[0.9rem] inline-block"
                src={iconError}
                alt="error"
              />
            </p>
          )}
        </div>

        <div className="mb-[4rem] flex border-b-[1px] border-white">
          <textarea
            className=" flex-1 bg-transparent px-[1.377rem] pb-[1.1rem] pt-[2.5rem] placeholder-white placeholder-opacity-50 outline-none"
            id="message"
            placeholder="Your Message"
            rows={4}
            onChange={handleMessageChange}
            value={message}
            ref={messageRef}
          ></textarea>
          {showErrorMsg && !message && (
            <p
              onClick={() => {
                messageRef.current?.focus();
              }}
              className="pt-[2.5rem] text-[1.2rem] font-normal italic leading-[2.6rem]"
            >
              Can&apos;t be empty
              <Image
                className="ml-[0.9rem] inline-block"
                src={iconError}
                alt="error"
              />
            </p>
          )}
        </div>

        <button className="w-fit self-center rounded-2xl bg-white px-[4.8rem] py-[1.8rem] text-[1.5rem] font-medium uppercase leading-[2.198rem] tracking-[0.1rem] text-dark-grey  hover:bg-light-peach hover:text-white md:self-end">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

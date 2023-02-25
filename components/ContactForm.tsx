import { useRef, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Refs for input fields focusing
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setShowErrorMsg(true);
    }
  };
  return (
    <div className="bg-peach px-[2.4rem] py-[7.2rem]  text-white">
      <div className="mb-[3.7rem] text-center">
        <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem]">
          Contact Us
        </p>
        <p className="text-[1.5rem] font-normal leading-[2.5rem]">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-[1.5rem] font-normal leading-[2.6rem]"
      >
        <div className="flex outline">
          <input
            className="mb-[1.4rem] flex-1 border-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
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
                nameRef.current.focus();
              }}
              className="pt-[1.1rem]"
            >
              Can't be empty
            </p>
          )}
          {/* <ErrorMsg />{" "} */}
        </div>

        <div className="flex outline">
          <input
            className="mb-[1.4rem] flex-1   border-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
            type="text"
            id="email"
            placeholder="Email Address"
            onChange={handleEmailChange}
            value={email}
            ref={emailRef}
          />
          {showErrorMsg && !email && (
            <p
              onClick={() => {
                emailRef.current.focus();
              }}
              className="pt-[1.1rem]"
            >
              Can't be empty
            </p>
          )}
        </div>

        <div className="flex outline">
          <input
            className="mb-[1.4rem] flex-1   border-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
            type="text"
            id="phone"
            placeholder="Phone"
            onChange={handlePhoneChange}
            value={phone}
            ref={phoneRef}
          />
          {showErrorMsg && !phone && (
            <p
              onClick={() => {
                phoneRef.current.focus();
              }}
              className="pt-[1.1rem]"
            >
              Can't be empty
            </p>
          )}
        </div>

        <div className="flex outline">
          <textarea
            className="mb-[5.8rem] flex-1   border-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
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
                messageRef.current.focus();
              }}
              className="pt-[1.1rem]"
            >
              Can't be empty
            </p>
          )}
        </div>

        <button className="mx-auto block rounded-2xl bg-white px-[4.8rem] py-[1.8rem] text-[1.5rem] font-medium uppercase leading-[2.198rem] tracking-[0.1rem] text-dark-grey">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

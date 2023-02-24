import WhiteButton from "./WhiteButton";

const ContactForm = () => {
  return (
    <div className="bg-peach px-[2.4rem] py-[7.2rem]  text-white">
      <div className="text-center">
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
      <form className="text-[1.5rem] font-normal leading-[2.6rem]">
        <input
          className="mb-[1.4rem] w-full bg-transparent py-[1.1rem] outline outline-black"
          type="text"
          id="name"
          placeholder="Name"
          name="name"
        />
        <input
          className="mb-[1.4rem] w-full bg-transparent py-[1.1rem] outline outline-black"
          type="text"
          id="email"
          placeholder="Email Address"
          name="email"
        />
        <input
          className="mb-[1.4rem] w-full bg-transparent py-[1.1rem] outline outline-black"
          type="text"
          id="phone"
          placeholder="Phone"
          name="email"
        />

        <textarea
          className="mb-[1.4rem] w-full bg-transparent py-[1.1rem] outline outline-black"
          name="message"
          id="message"
          cols={30}
          placeholder="Your Message"
          rows={10}
        ></textarea>

        {/* Not enough padding in this component for this form?? */}
        <WhiteButton text="submit" />
      </form>
    </div>
  );
};

export default ContactForm;

import WhiteButton from "./WhiteButton";

const ContactForm = () => {
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
      <form className="text-[1.5rem] font-normal leading-[2.6rem]">
        <input
          className="mb-[1.4rem] w-full border-b-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
          type="text"
          id="name"
          placeholder="Name"
          name="name"
        />
        <input
          className="mb-[1.4rem] w-full  border-b-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
          type="text"
          id="email"
          placeholder="Email Address"
          name="email"
        />
        <input
          className="mb-[1.4rem] w-full  border-b-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
          type="text"
          id="phone"
          placeholder="Phone"
          name="email"
        />

        <textarea
          className="mb-[5.8rem] w-full  border-b-[1px] border-white bg-transparent px-[1.377rem] py-[1.1rem] placeholder-white placeholder-opacity-50 outline-none"
          name="message"
          id="message"
          placeholder="Your Message"
          rows={4}
        ></textarea>

        <button className="mx-auto block rounded-2xl bg-white px-[4.8rem] py-[1.8rem] text-[1.5rem] font-medium uppercase leading-[2.198rem] tracking-[0.1rem] text-dark-grey">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

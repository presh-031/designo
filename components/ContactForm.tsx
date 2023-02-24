import WhiteButton from "./WhiteButton";

const ContactForm = () => {
  return (
    <div>
      <div>
        <p>Contact Us</p>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
        </div>
        <WhiteButton />
      </form>
    </div>
  );
};

export default ContactForm;

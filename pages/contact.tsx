import AllLocations from "@/components/AllLocations";
import ContactForm from "@/components/ContactForm";
import Meta from "@/components/Head";

const contact = () => {
  return (
    <>
      <Meta page="Contact Us" />

      <ContactForm />
      <AllLocations />
    </>
  );
};

export default contact;

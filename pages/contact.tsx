import AllLocations from "@/components/AllLocations";
import ContactForm from "@/components/ContactForm";

const contact = () => {
  return (
    <>
      {/* Check contact form's tablet responsiveness. */}
      <ContactForm />
      <AllLocations />
    </>
  );
};

export default contact;

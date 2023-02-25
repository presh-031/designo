import Location from "@/components/Location";
import Talk from "@/components/Talk";

const locations = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-[4rem]">
        <Location
          location="Canada"
          office="Designo Central Office"
          street="3886 Wellington Street"
          address="Toronto, Ontario M9C 3J5"
          phone="P : +1 253-863-8967"
          mail="contact@designo.co"
          id="canada"
        />
        <Location
          location="Australia"
          office="Designo Central Office"
          street="3886 Wellington Street"
          address="Toronto, Ontario M9C 3J5"
          phone="P : +1 253-863-8967"
          mail="contact@designo.co"
          id="australia"
        />
        <Location
          location="United Kingdom"
          office="Designo Central Office"
          street="3886 Wellington Street"
          address="Toronto, Ontario M9C 3J5"
          phone="P : +1 253-863-8967"
          mail="contact@designo.co"
          id="united-kingdom"
        />
      </div>
      <Talk />
    </>
  );
};
export default locations;

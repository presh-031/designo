import Location from "@/components/Location";

const locations = () => {
  return (
    <div className="grid grid-cols-1 gap-[4rem]">
      <Location
        location="Canada"
        office="Designo Central Office"
        street="3886 Wellington Street"
        address="Toronto, Ontario M9C 3J5"
        phone="P : +1 253-863-8967"
        mail="contact@designo.co"
      />
      <Location
        location="Canada"
        office="Designo Central Office"
        street="3886 Wellington Street"
        address="Toronto, Ontario M9C 3J5"
        phone="P : +1 253-863-8967"
        mail="contact@designo.co"
      />
      <Location
        location="Canada"
        office="Designo Central Office"
        street="3886 Wellington Street"
        address="Toronto, Ontario M9C 3J5"
        phone="P : +1 253-863-8967"
        mail="contact@designo.co"
      />
    </div>
  );
};
export default locations;

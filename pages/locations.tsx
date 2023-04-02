import Talk from "@/components/Cta";
import Meta from "@/components/Head";
import Location from "@/components/Location";

const locations = () => {
  return (
    <>
      <Meta page="Our Locations" />

      <div className="grid grid-cols-1 gap-[4rem] sm:gap-[8rem]  md:gap-[12rem] xl:gap-[3.2rem]">
        <Location
          location="Canada"
          office="Designo Central Office"
          street="3886 Wellington Street"
          address="Toronto, Ontario M9C 3J5"
          addressCoords={[43.636535, -79.567946]}
          phone="+1 253-863-8967"
          mail="contact@designo.co"
          id="canada"
          render="1"
        />
        <Location
          location="Australia"
          office="Designo AU Office"
          street="19 Balonne Street"
          address="New South Wales 2443"
          addressCoords={[-31.4517, 152.8929]}
          phone="(02) 6720 9092"
          mail="contact@designo.au"
          id="australia"
          render="2"
        />
        <Location
          location="United Kingdom"
          office="Designo UK Office"
          street="13  Colorado Way"
          address="Rhyd-y-fro SA8 9GA"
          addressCoords={[51.7286, 3.8466]}
          phone="078 3115 1400"
          mail="contact@designo.uk"
          id="united-kingdom"
          render="3"
        />
      </div>
      <Talk />
    </>
  );
};
export default locations;

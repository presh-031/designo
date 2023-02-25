// React-leaflet setup
// import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// import dynamic from "next/dynamic";

// const DynamicMap = dynamic(() => import("react-leaflet"), {
//   ssr: false,
// });

type LocationProps = {
  location: string;
  office: string;
  street: string;
  address: string;
  phone: string;
  mail: string;
  id: string;
};

const Location = (props: LocationProps) => {
  return (
    <div id={props.id} className="">
      <div className="h-[32rem] ">
        {/* <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
      <div className="bg-[#fdf3f0] py-[8.0rem] text-center">
        <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] text-peach">
          {props.location}
        </p>
        <div className="text-[1.5rem] font-normal leading-[2.5rem] text-black ">
          <ul className="mb-[2.4rem]">
            <li className="font-bold">{props.office}</li>
            <li>{props.street}</li>
            <li>{props.address}</li>
          </ul>
          <ul>
            <li className="font-bold">Contact</li>
            <li>P : {props.phone}</li>
            <li>M : {props.mail}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;

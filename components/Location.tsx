// React-leaflet setup for Next.js
import dynamic from "next/dynamic";
import React from "react";

type LocationProps = {
  location: string;
  office: string;
  street: string;
  address: string;
  addressCoords: number[];
  phone: string;
  mail: string;
  id: string;
};

const Location = (props: LocationProps) => {
  // React-leaflet setup for Next.js
  // useMemo to avoid flickering
  const Map = React.useMemo(
    () =>
      dynamic(
        () => import("./Map"), // replace '@components/map' with your component's location
        {
          loading: () => (
            <p className="grid h-full place-items-center text-[4rem] text-peach">
              Loading Map...
            </p>
          ),
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  );

  return (
    <div id={props.id}>
      <div className="h-[32rem]">
        <Map coordinates={props.addressCoords} />
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

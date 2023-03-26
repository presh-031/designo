import React from "react";
// React-leaflet setup for Next.js
import dynamic from "next/dynamic";

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
    <div
      id={props.id}
      className="outline sm:px-[4rem] xl:flex  xl:px-[16.5rem]"
    >
      <div className="h-[32rem] outline sm:mb-[2rem] sm:overflow-hidden sm:rounded-2xl md:mb-[3.1rem] xl:m-0">
        <Map coordinates={props.addressCoords} />
      </div>
      <div className="bg-[#fdf3f0] bg-[url('../assets/shared/desktop/bg-pattern-two-circles.svg')] py-[8.0rem] text-center sm:overflow-hidden sm:rounded-2xl sm:px-[7.4rem] sm:py-[8.8rem] sm:text-left">
        <p className="mb-[2.4rem] text-[3.2rem] font-medium leading-[3.6rem] text-peach  sm:text-[4rem] sm:leading-[4.8rem]">
          {props.location}
        </p>
        <div className="text-[1.5rem] font-normal leading-[2.5rem] text-black  sm:flex sm:flex-row sm:gap-[3rem] sm:text-[1.6rem] sm:leading-[2.6rem] ">
          <ul className="mb-[2.4rem]  sm:m-0 md:w-[25.5rem]">
            <li className="font-bold">{props.office}</li>
            <li>{props.street}</li>
            <li>{props.address}</li>
          </ul>
          <ul>
            <li className="font-bold  md:w-[25.5rem]">Contact</li>
            <li>P : {props.phone}</li>
            <li>M : {props.mail}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;

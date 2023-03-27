import australia from "../assets/shared/desktop/illustration-australia.svg";
import canada from "../assets/shared/desktop/illustration-canada.svg";
import unitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";
import SeeLocation from "./SeeLocation";

const AllLocations = () => {
  return (
    <div className="flex flex-col items-center gap-[4.8rem] py-[12rem]  sm:gap-[5.8rem] xl:flex-row xl:justify-center xl:gap-[3rem] xl:py-[16rem]  xl:px-[16.5rem] ">
      <SeeLocation
        src={canada}
        location="canada"
        href="canada"
        gradientDirection="90deg"
      />
      <SeeLocation
        src={australia}
        location="australia"
        href="australia"
        gradientDirection="180deg"
      />
      <SeeLocation
        src={unitedKingdom}
        location="united kingdom"
        href="united-kingdom"
        gradientDirection="-90deg"
      />
    </div>
  );
};

export default AllLocations;

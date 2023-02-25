import australia from "../assets/shared/desktop/illustration-australia.svg";
import canada from "../assets/shared/desktop/illustration-canada.svg";
import unitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";

import SeeLocation from "./SeeLocation";
const AllLocations = () => {
  return (
    <div className="flex flex-col gap-[4.8rem] py-[12rem] outline">
      <SeeLocation src={canada} location="canada" href="canada" />
      <SeeLocation src={australia} location="australia" href="australia" />
      <SeeLocation
        src={unitedKingdom}
        location="united kingdom"
        href="united-kingdom"
      />
    </div>
  );
};

export default AllLocations;

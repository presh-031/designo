import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";

import SeeLocation from "./SeeLocation";
const AllLocations = () => {
  return (
    <div className="flex flex-col">
      <SeeLocation src={canada} location="canada" />
      <SeeLocation src={australia} location="australia" />
      <SeeLocation src={unitedKingdom} location="united kingdom" />
    </div>
  );
};

export default AllLocations;

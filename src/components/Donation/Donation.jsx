import { useState } from "react";
import { getLocalStorageData } from "../../utilities/localStorage";
import DonateCard from "../DonateCard/DonateCard";

function Donation() {
  const donations = getLocalStorageData();
  const [showItems, setShowItems] = useState(4);
  const handleShowAll = () => {
    setShowItems(donations.length);
  };
  return (
    <div className="container mx-auto mt-10">
      <div
        className={`${
          !donations.length ? "block" : "hidden"
        } text-center text-red-400 mt-20`}
      >
        <h1 className="text-7xl">You have not donated yet. Please donate.</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {donations.slice(0, showItems).map((donation, i) => (
          <DonateCard key={i} donation={donation} />
        ))}
      </div>
      <div
        className={`text-center mt-10 ${showItems > 4 ? "hidden" : "block"}`}
      >
        {donations.length > 4 && (
          <button
            onClick={handleShowAll}
            className="text-white bg-green-400 px-4 py-2 rounded-md"
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
}

export default Donation;

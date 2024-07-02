import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
import { Link } from "react-router-dom";

function ShowDonations() {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {donations.map((donation) => (
        <Link
          key={donation.id}
          to={`/donation-details/${donation.id}`}
          state={{ donation }}
          className="cursor-pointer"
        >
          <DonationCard donation={donation} />
        </Link>
      ))}
    </div>
  );
}

export default ShowDonations;

import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
function DonationDetails() {
  const location = useLocation();
  const { donation } = location.state;

  console.log(donation);
  return <div>details</div>;
}

export default DonationDetails;

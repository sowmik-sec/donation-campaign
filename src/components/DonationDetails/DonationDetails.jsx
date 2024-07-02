import { useLocation } from "react-router-dom";
import { storeToLocalStorage } from "../../utilities/localStorage";
import toast, { Toaster } from "react-hot-toast";

const colorClasses = {
  red: {
    bg400: "bg-red-400",
  },
  blue: {
    bg400: "bg-blue-400",
  },
  lime: {
    bg400: "bg-lime-400",
  },
  orange: {
    bg400: "bg-orange-400",
  },
  // Add more colors if needed
};

/* eslint-disable react/prop-types */
function DonationDetails() {
  const location = useLocation();
  const { donation } = location.state;
  const { img, description, price, title, color } = donation;
  const classes = colorClasses[color];
  const handleDonate = () => {
    storeToLocalStorage(donation);
    toast.success("Thanks for your donation");
  };
  return (
    <div className="container mx-auto my-20">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <img className="w-full" src={img} alt="" />
        <div className="bg-black bg-opacity-50 h-32 relative -top-32">
          <button
            onClick={handleDonate}
            className={`${classes.bg400} text-white px-4 py-2 rounded-md ml-10 mt-10`}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DonationDetails;

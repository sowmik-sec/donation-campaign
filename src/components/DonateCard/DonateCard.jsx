import { Link } from "react-router-dom";

const colorClasses = {
  red: {
    bg100: "bg-red-100",
    bg200: "bg-red-200",
    bg400: "bg-red-400",
    text400: "text-red-400",
  },
  blue: {
    bg100: "bg-blue-100",
    bg200: "bg-blue-200",
    bg400: "bg-blue-400",
    text400: "text-blue-400",
  },
  lime: {
    bg100: "bg-lime-100",
    bg200: "bg-lime-200",
    bg400: "bg-lime-400",
    text400: "text-lime-400",
  },
  orange: {
    bg100: "bg-orange-100",
    bg200: "bg-orange-200",
    bg400: "bg-orange-400",
    text400: "text-orange-400",
  },
  // Add more colors if needed
};

/* eslint-disable react/prop-types */
function DonateCard({ donation }) {
  const { img, category, title, price, color } = donation;
  const classes = colorClasses[color];
  return (
    <div className="flex mx-auto">
      <div>
        <img className="h-44 w-52" src={img} alt="" />
      </div>
      <div className={`p-4 ${classes.bg100} rounded-r-lg w-64`}>
        <div
          className={`px-2 py-1 rounded-sm ${classes.bg200} w-24 text-center`}
        >
          <p className={`font-bold ${classes.text400}`}>{category}</p>
        </div>
        <h5>{title}</h5>
        <h5 className={`font-bold ${classes.text400}`}>${price}</h5>
        <Link
          to={`/donation-details/${donation.id}`}
          state={{ donation }}
          className="cursor-pointer"
        >
          <button
            className={`${classes.bg400} text-white px-4 py-2 rounded-md`}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DonateCard;

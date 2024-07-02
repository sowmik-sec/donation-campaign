/* eslint-disable react/prop-types */

const colorClasses = {
  red: {
    bg100: "bg-red-100",
    bg200: "bg-red-200",
    text400: "text-red-400",
  },
  blue: {
    bg100: "bg-blue-100",
    bg200: "bg-blue-200",
    text400: "text-blue-400",
  },
  lime: {
    bg100: "bg-lime-100",
    bg200: "bg-lime-200",
    text400: "text-lime-400",
  },
  orange: {
    bg100: "bg-orange-100",
    bg200: "bg-orange-200",
    text400: "text-orange-400",
  },
  // Add more colors if needed
};

function DonationCard({ donation }) {
  const { img, color, category, title } = donation;
  const classes = colorClasses[color] || colorClasses.red; // Default to red if color is not found

  return (
    <div className={`rounded-lg ${classes.bg100} mx-auto`}>
      <img className="w-full h-48" src={img} alt="" />
      <div className="p-4">
        <div
          className={`px-2 py-1 rounded-sm ${classes.bg200} w-24 text-center`}
        >
          <p className={`font-bold ${classes.text400}`}>{category}</p>
        </div>
        <h5 className={`font-bold ${classes.text400}`}>{title}</h5>
      </div>
    </div>
  );
}

export default DonationCard;

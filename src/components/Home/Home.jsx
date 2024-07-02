import Banner from "../Banner/Banner";
import ShowDonations from "../ShowDonations/ShowDonations";

function Home() {
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto my-36">
        <ShowDonations />
      </div>
    </div>
  );
}

export default Home;

function Banner() {
  return (
    <div
      className={`bg-[url('https://www.habitatswmt.org/wp-content/uploads/2021/04/Donate.jpg')] bg-no-repeat bg-cover w-full h-[600px]`}
    >
      <div className="text-center relative top-56 bg-white h-4/6 opacity-95 space-y-7 w-[99%]">
        <h2 className="text-5xl text-black ">
          I Grow By Helping People In Need
        </h2>
        <div className="join">
          <input
            className="input bg-white input-bordered join-item"
            placeholder="Search here..."
          />
          <button className="btn bg-red-400 text-white border-none hover:bg-red-700 join-item rounded-r-xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

const Bonus = () => {
  return (
    <>
      <div className="p-4 bg-[#F4F5F7]">
        <h1 className=" font-semibold text-[18px]">Get Bounus</h1>
        <div className="bg-white p-4 rounded-lg mt-4">
          <div className=" ">
            <label className=" font-medium">Enter Your Bonus Coupon</label>
            <input
              type="text"
              placeholder="Enter your coupon"
              className="input  mt-2 w-full border border-gray-300 rounded-3xl bg-[#F4F5F7] focus-visible:outline-0"
            />
          </div>
          <button className="btn btn-primary mt-4 w-full rounded-3xl focus-visible:outline-0">
            Get Bonus
          </button>
        </div>
      </div>
    </>
  );
};

export default Bonus;

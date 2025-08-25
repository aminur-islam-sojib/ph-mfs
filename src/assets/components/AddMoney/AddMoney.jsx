import { useBalance } from '../../../ContexApi/BalanceProvider';

const AddMoney = () => {
  const { setAvailableBalance } = useBalance();

  return (
    <>
      <div className="p-4 bg-[#F4F5F7]">
        <h1 className=" font-semibold text-[18px]">Add Money</h1>
        <div className="bg-white p-4 rounded-lg mt-4">
          <div className=" mb-4">
            <label htmlFor="" className=" font-medium">
              Select a Bank
            </label>
            <select
              defaultValue="Pick a color"
              className="select mt-2 w-full border border-gray-300 rounded-3xl bg-[#F4F5F7] focus-visible:outline-0"
            >
              <option disabled={true}>Select a bank</option>
              <option>ISSB Bank</option>
              <option>Ruali Bank</option>
              <option>Dhaka Bank</option>
            </select>
          </div>
          <div className=" ">
            <label className=" font-medium"> Bank Account Number</label>
            <input
              type="number"
              placeholder="Enter 11 digit account number"
              className="input  mt-2 w-full border border-gray-300 rounded-3xl bg-[#F4F5F7] focus-visible:outline-0"
            />
          </div>
          <div className=" mt-4">
            <label className=" font-medium">Amount to Add</label>
            <input
              type="number"
              placeholder="Add Amount to withdraw"
              className="input  mt-2 w-full border border-gray-300 rounded-3xl bg-[#F4F5F7] focus-visible:outline-0"
            />
          </div>
          <div className=" mt-4">
            <label className=" font-medium">Pin Number</label>
            <input
              type="number"
              placeholder="Enter 4 digit pin number"
              max={4}
              className="input  mt-2 w-full border border-gray-300 rounded-3xl bg-[#F4F5F7] focus-visible:outline-0"
            />
          </div>
          <button
            onClick={() => setAvailableBalance((prev) => prev + 1000)}
            className="btn btn-primary mt-4 w-full rounded-3xl focus-visible:outline-0"
          >
            Add Money
          </button>
        </div>
      </div>
    </>
  );
};

export default AddMoney;

import Cards from '../Cards/Cards';
import groups from '../../image/Group.png';
import '../../../index.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between my-auto ">
        <div className="flex gap-1">
          <div className=" h-13 w-13 flex items-center  p-3 rounded-[50%] ">
            <img src={groups} alt="" className="group-image" />
          </div>
          <div className=" flex flex-col px-2 rounded-lg leading-5 justify-center">
            <h1 className=" font-bold">
              $ <span>450</span>
            </h1>
            <p className=" text-gray-500 text-sm">Available Balance</p>
          </div>
        </div>
        <button className="btn btn-outline">
          <i className="fa-solid fa-arrow-right-from-bracket rotate-180"></i>
          Default
        </button>
      </div>
      <hr className=" text-gray-400" />
      <div className=" mt-5 p-3">
        <h1 className=" text-xl font-bold">🔥 Welcome to Payooo!</h1>
        <p className=" text-gray-500 text-sm mt-2">
          Enjoy easy and convenient financial services with us. Cashout charge
          is low and{' '}
        </p>
      </div>
    </>
  );
};

export default Navbar;

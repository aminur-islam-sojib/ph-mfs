import Cards from '../Cards/Cards';
import groups from '../../image/Group.png';
import '../../../index.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const confirmLogout = () => {
    setShowPopup(false);
    navigate('/');
  };

  const cancelLogout = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div className="navbar flex justify-between my-auto">
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
        <button className="btn btn-outline" onClick={handleClick}>
          <i className="fa-solid fa-arrow-right-from-bracket rotate-180"></i>
          Log Out
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
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-40 z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center z-50">
            <h2 className="text-lg font-bold mb-4">
              Are you sure! you want to log out?
            </h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 px-4 py-2 rounded-lg cursor-pointer"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

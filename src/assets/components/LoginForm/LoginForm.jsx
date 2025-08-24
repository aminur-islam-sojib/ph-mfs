import bg from '../../../assets/image/bg.png';
import group from '../../../assets/image/Group.png';
import { useNavigate } from 'react-router-dom';
import '../../../index.css';
import { useState } from 'react';

const LoginForm = () => {
  const userDetails = [
    { number: 1757829428, pin: 1234 },
    { number: 1757829429, pin: 1234 },
  ];

  const navigate = useNavigate();
  const [phone, setNumber] = useState();
  const [pass, setPin] = useState();
  const [err, setErr] = useState(false);

  const handleCLick = () => {
    const user = userDetails.find(
      (user) => Number(phone) === user.number && Number(pass) === user.pin
    );

    if (user) {
      navigate('/home');
    } else {
      setErr('Invalid Credentials');
      // alert('Invalid Credentials');
    }
  };

  return (
    <>
      <div className=" h-screen flex items-center">
        <div className=" mx-auto w-[300px] h-[500px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col justify-between relative">
          <div className=" flex flex-col items-center justify-center relative">
            <img src={bg} alt="" height={50} />
            <img src={group} alt="" height={50} className=" absolute top-7" />

            <div className=" absolute top-20 flex flex-col items-center">
              <h1 className=" text-2xl font-bold mt-16">Welcome Back!</h1>
              <p className=" text-gray-500 text-sm">Login to your account</p>
            </div>

            <div className=" loginForm gap-2 flex flex-col mb-16 w-full absolute">
              <div className=" flex flex-col gap-1.5">
                <label className=" font-medium ">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="input  focus-visible:outline-0"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className=" flex flex-col gap-1.5">
                <label className=" font-medium">Pin</label>
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="input focus-visible:outline-0 "
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>
              {err && <p className=" text-red-500 text-sm">{err}</p>}
              <button
                onClick={handleCLick}
                className="btn btn-active btn-primary mt-2 active:scale-95 hover:bg-blue-800"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

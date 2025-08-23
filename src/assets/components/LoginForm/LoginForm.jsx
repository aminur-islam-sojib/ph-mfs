import bg from '../../../assets/bg.png';
import group from '../../../assets/Group.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate('/home');
  };

  return (
    <>
      <div className=" h-screen flex items-center">
        <div className=" mx-auto w-[300px] h-[500px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col justify-between">
          <div className=" flex flex-col items-center justify-center relative">
            <img src={bg} alt="" height={50} />
            <img src={group} alt="" height={50} className=" absolute top-7" />

            <div className=" absolute top-20 flex flex-col items-center">
              <h1 className=" text-2xl font-bold mt-16">Welcome Back!</h1>
              <p className=" text-gray-500 text-sm">Login to your account</p>
            </div>

            <div className=" gap-2 flex flex-col mb-16 w-full">
              <div>
                <label className=" font-medium">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="input"
                />
              </div>
              <div>
                <label className=" font-medium">Pin</label>
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="input"
                />
              </div>
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

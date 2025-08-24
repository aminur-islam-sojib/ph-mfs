import PropTypes from 'prop-types';
import bonus from '../../image/bonus1.png';
import money from '../../image/money1.png';
import purse from '../../image/purse1.png';
import send from '../../image/send1.png';
import transaction from '../../image/transaction1.png';
import wallet from '../../image/wallet1.png';

const Cards = ({ active = 'add', onSelect = () => {} }) => {
  return (
    <>
      <div className=" grid grid-cols-3 gap-3 mx-3 mt-5">
        <div
          role="button"
          onClick={() => onSelect('add')}
          //   onKeyDown={(e) => (e.key === 'Enter' ? onSelect('add') : null)}
          className={`cursor-pointer ${
            active === 'add'
              ? 'border border-blue-500 rounded-lg p-3 flex flex-col justify-center items-center leading-1.5 gap-2'
              : 'border border-gray-200 rounded-lg p-3 flex flex-col justify-center items-center leading-1.5 gap-2'
          }`}
        >
          <div className="flex flex-col justify-center items-center leading-1.5 gap-2">
            <div>
              <img src={wallet} alt="add money" />
            </div>
            <h1 className=" text-sm text-nowrap font-medium">Add Money</h1>
          </div>
        </div>

        <div
          role="button"
          onClick={() => onSelect('send')}
          //   onKeyDown={(e) => (e.key === 'Enter' ? onSelect('send') : null)}
          className={`cursor-pointer ${
            active === 'send'
              ? 'border border-blue-500 rounded-lg p-3 flex flex-col justify-center items-center leading-1.5 gap-2'
              : 'border border-gray-200 rounded-lg p-3 flex flex-col justify-center items-center leading-1.5 gap-2'
          }`}
        >
          <div className="flex flex-col justify-center items-center leading-1.5 gap-2">
            <div>
              <img src={money} alt="send money" />
            </div>
            <h1 className=" text-sm text-nowrap font-medium">Send Money</h1>
          </div>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  active: PropTypes.string,
  onSelect: PropTypes.func,
};

export default Cards;

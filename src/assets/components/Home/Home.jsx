import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AddMoney from '../AddMoney/AddMoney';
import Cards from '../Cards/Cards';
import SentMoney from '../SentMoney/SentMoney';
import Transfer from '../TransferMoney/Transfer';
import PayBil from '../PayBil/PayBil';
import Bonus from '../Bonus/GetBonus';
import Transactions from '../Transactions/Transactions';

const Home = () => {
  const [active, setActive] = useState('add'); // 'add' | 'send'

  return (
    <div className=" h-screen  w-[350px] mx-auto my-auto shadow-lg rounded-lg">
      <Navbar />
      <Cards active={active} onSelect={setActive} />

      {active === 'add' && <AddMoney />}
      {active === 'send' && <SentMoney />}
      {active === 'transfer' && <Transfer />}
      {active === 'payBIll' && <PayBil />}
      {active === 'bonus' && <Bonus />}
      {active === 'transaction' && <Transactions />}
    </div>
  );
};

export default Home;

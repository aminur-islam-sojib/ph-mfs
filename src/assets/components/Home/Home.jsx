import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AddMoney from '../AddMoney/AddMoney';
import Cards from '../Cards/Cards';
import SentMoney from '../SentMoney/SentMoney';
import Transfer from '../TransferMoney/Transfer';

const Home = () => {
  const [active, setActive] = useState('add'); // 'add' | 'send'

  return (
    <div className=" h-screen  w-[400px] mx-auto my-auto shadow-lg">
      <Navbar />
      <Cards active={active} onSelect={setActive} />

      {active === 'add' && <AddMoney />}
      {active === 'send' && <SentMoney />}
      {active === 'transfer' && <Transfer />}
    </div>
  );
};

export default Home;

import { createContext, useContext, useState } from 'react';

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  // provide an initial value so UI shows something meaningful
  const [balance, setBalance] = useState(450);

  // expose the names your components expect
  return (
    <BalanceContext.Provider
      value={{ availableBalance: balance, setAvailableBalance: setBalance }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);

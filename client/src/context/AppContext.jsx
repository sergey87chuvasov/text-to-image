import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null); // false

  const value = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

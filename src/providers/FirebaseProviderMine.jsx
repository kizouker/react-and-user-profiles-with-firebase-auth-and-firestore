import { createContext } from "react";
import { auth, db } from "../firebase/initFirebase";


export const FirebaseContext = createContext({ auth, db });

export const FirebaseProviderMine = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProviderMine;

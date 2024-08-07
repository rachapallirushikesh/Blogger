import React,{useState} from "react";
import { store } from "./useContext";

const UserContextProvider = ({children})=>{

    const [cartNumber,setCartNumber] = useState(0);
    const [log,setLog] = useState(null);
    const [cartData,setCartData] = useState([]);
    const [proceed,setProceed] = useState(true);

    return(
        <store.Provider value={{cartNumber,setCartNumber,log,setLog,cartData,setCartData,proceed,setProceed}}>
            {children}
        </store.Provider>
    );
}

export default UserContextProvider;
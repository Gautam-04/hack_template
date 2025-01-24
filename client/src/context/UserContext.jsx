/* eslint-disable react/prop-types */
import { createContext, useContext, useState} from "react";
// import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [value,setValue] = useState();

    // const navigate= useNavigate()

    return(
        <UserContext.Provider value={{value,setValue}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () => {
    return useContext(UserContext);
}

export default UserProvider;
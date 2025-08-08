import { UserContext } from "./UserContext";
import { useState } from "react";

export const UserContextProvider = ({children})=>{

    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
import { useContext } from "react"
import {UserContext} from "../context/usercontext/UserContext"

export const Profile = () =>{

    const {user} = useContext(UserContext)
    if(!user) return <h1>No user Login</h1>

    return(
        <>
            <h4>Welcome User Profile {user.name}</h4>
            <h5></h5>
        </>
    )
}
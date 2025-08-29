import { useDispatch } from "react-redux"
import auth from "../services/auth"
import { logout } from "../store/authSlice"

function LogoutButton() {
    const dispatch = useDispatch()
    const handlelogout = ()=>{
        console.log("log out click")
        auth.logout().then(()=> dispatch(logout()))
    }
  return (
    <button
    className="cursor-pointer px-3 py-0.5 rounded-md bg-[#588ccb]"
    onClick={handlelogout}
    >Logout</button>
  )
}

export default LogoutButton
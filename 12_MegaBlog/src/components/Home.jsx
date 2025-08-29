import { useSelector } from "react-redux";

export default function Home() {

  const currentUser = useSelector((state)=>state.auth.userData)
  const authStatus = useSelector((state)=> state.auth.status)
  console.log('user', currentUser, authStatus)

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        {
          authStatus ?(
            <h4>Welcome <span className="text-teal-500">{currentUser.name}</span> to MyBlog</h4>
          ):(
            <h4>Welcome to MyBlog</h4>
          )
        }
      </h1>
      <p className="text-gray-600">A simple static blog built with React + Tailwind</p>
    </div>
  );
}

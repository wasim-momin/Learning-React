import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate()

  const navItems = [
    {
      name:'Home',
      url:'/',
      active: true,
    },
    {
      name:'Posts',
      url:'/posts',
      active: true,
    },
    {
      name:'Create',
      url:'/create',
      active: true,
    },
    {
      name:'Login',
      url:'/login',
      active: true,
    },
    {
      name:'SignUp',
      url:'/signup',
      active: true,
    },
  ]

  return (
    <header className="bg-gray-800 bg-[#588ccb] text-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MyBlog</Link>
        <ul className="flex gap-4">
          {
            navItems.map((navitem)=>(
              <li key={navitem.name} className="cursor-pointer px-3 py-0.5 rounded-md bg-[#588ccb]" onClick={()=>navigate(navitem.url)}>{navitem.name}</li>
            ))
          }
        </ul>
      </div>
    </header>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  console.log(authStatus);

  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true,
    },
    {
      name: "Posts",
      url: "/posts",
      active: !authStatus,
    },
    {
      name: "Create",
      url: "/create",
      active: authStatus,
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      url: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <header className="bg-gray-800 bg-[#588ccb] text-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyBlog
        </Link>
        <ul className="flex gap-4">
          {navItems.map((navitem) =>
            navitem.active ? (
              <li
                key={navitem.name}
                className="cursor-pointer px-3 py-0.5 rounded-md bg-[#588ccb]"
                onClick={() => navigate(navitem.url)}
              >
                {navitem.name}
              </li>
            ) : (
              null
            )
          )}
        </ul>
      </div>
    </header>
  );
}

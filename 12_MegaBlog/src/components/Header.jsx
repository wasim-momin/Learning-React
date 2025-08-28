import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 bg-[#588ccb] text-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MyBlog</Link>
        <nav className="flex gap-4">
          <Link to="/" className="px-3 py-0.5 rounded-md bg-[#588ccb]" >Home</Link>
          <Link to="/posts" className="px-3 py-0.5 rounded-md bg-[#588ccb]" >Posts</Link>
          <Link to="/create" className="px-3 py-0.5 rounded-md bg-[#588ccb]" >Create</Link>
          <Link to="/login" className="px-3 py-0.5 rounded-md bg-[#588ccb]" >Login</Link>
          <Link to="/signup" className="px-3 py-0.5 rounded-md bg-[#588ccb]" >Signup</Link>
        </nav>
      </div>
    </header>
  );
}

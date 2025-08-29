// pages/PostDetails.jsx
import { Pencil, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";

export default function PostDetails() {
  const authStatus = useSelector((state) => state.auth.status);
  const currentUser = useSelector((state)=> state.auth.userData)

  const ISODate = currentUser?.$createdAt
  const dateObj = new Date(ISODate)
  const dateOptions = {
    day:"2-digit",
    month: "short",
    year:"numeric"
  }
  const createDate = dateObj.toLocaleDateString("en-GB", dateOptions)

  const post = {
    id: 1,
    title: "How to Learn React in 2025",
    content: `React Fiber, concurrent rendering aur server components ke saath 
              kaafi evolve ho chuka hai. Agar aapko React master karna hai toh 
              pehle basics samajhna zaroori hai, phir hooks, aur phir advance features.`,
    author: "Wasim",
    date: "28 Aug, 2025",
    image: "https://picsum.photos/800/400?random=10",
  };

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            {authStatus && (
              <div className="flex gap-3">
                <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition">
                  <Pencil className="w-5 h-5 text-blue-600" />
                </button>
                <button className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )}
            {/* Action Buttons */}
          </div>

          <p className="text-gray-500 text-sm mb-2">
            ✍️ {currentUser?.name} • {createDate}
          </p>

          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </div>
      </div>
    </div>
  );
}

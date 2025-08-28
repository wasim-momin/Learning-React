import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {post.title}
      </h2>
      <p className="text-gray-500 text-sm mb-2">
        ✍️ {post.author} • {post.date}
      </p>
      <p className="text-gray-600 text-sm line-clamp-2">{post.content}</p>
    </Link>
  );
}

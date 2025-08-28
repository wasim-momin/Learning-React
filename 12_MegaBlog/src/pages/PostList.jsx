import {PostCard} from "../components/index"

export default function PostList() {
  const posts = [
    {
      id: 1,
      title: "How to Learn React in 2025",
      content: "React Fiber aur Concurrent Rendering samajhna ab zaroori hai...",
      author: "Wasim",
      date: "28 Aug, 2025",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      title: "Tailwind Tips & Tricks",
      content: "Utility-first CSS ka best use kaise karein aur responsive design...",
      author: "Ali",
      date: "27 Aug, 2025",
      image: "https://picsum.photos/400/300?random=2",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📚 Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

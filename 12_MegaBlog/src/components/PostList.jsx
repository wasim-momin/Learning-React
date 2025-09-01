import { PostCard } from "./index";
import { posts } from "../dummyContent/posts";
import { useEffect, useState } from "react";
import postService from "../services/post";

export default function PostList() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then((posts) => {
      console.log('checke', posts);
      
      if (posts) {
        setAllPosts(posts.documents);
      }
    });
  }, []);
  if (allPosts.length === 0) {
    <div>No post at yet</div>;
  }
  console.log('allpost', allPosts);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📚 Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.map((post) => (
            <PostCard key={post.id}  {...post} />
        ))}
      </div>
    </div>
  );
}

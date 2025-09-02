// pages/PostDetails.jsx
import { Pencil, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import postService from "../services/post";
import fileService from"../services/file"

export default function PostDetails() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate()

  const userData = useSelector((state) => state.auth.userData);
  const isAuther = post && userData ? post.userId === userData.$id : false;
  const postImage = fileService.previewFile(post?.featuredImage)

  console.log("user", slug);

  useEffect(() => {
    if (slug) {
      postService.getPost(slug).then((post) => {
        if(post) setPost(post);
        else navigate("/")
      });
    } else navigate("/")
  }, []);

  const handleDeletePost =()=>{
    postService.deletePost(post.$id).then((status)=>{
      if (status){
        fileService.deleteFile(post.featuredImage)
        navigate("/posts")
      }
    })
    
  }

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        <img
          src={postImage}
          alt={post.title}
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
            {isAuther && (
              <div className="flex gap-3">
                <button className="cursor-pointer p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition" onClick={()=>{navigate(`/edit-post/${post.$id}`)}}>
                  <Pencil className="w-5 h-5 text-blue-600" />
                </button>
                <button className="cursor-pointer p-2 rounded-full bg-red-100 hover:bg-red-200 transition" onClick={handleDeletePost}>
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            )}
            {/* Action Buttons */}
          </div>
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </div>
      </div>
    </div>
  );
}


import { CreatePost, PostCard } from "./index";
import { posts } from "../dummyContent/posts";
import { useEffect, useState } from "react";
import postService from "../services/post";
import { useNavigate, useParams } from "react-router-dom";

export default function PostEdit() {
    
   const [post, setPost] = useState(null)
   const {slug} = useParams()
   const navigate = useNavigate()
   
   useEffect(()=>{
    if(slug){
        postService.getPost(slug).then((post)=>{
            if(post) setPost(post)
            else navigate("/posts")
        })
    }
   },[slug, navigate])
  
  return post ? (
    <div className="container mx-auto px-4 py-8">
        <CreatePost post={post}/>
    </div>
  ) : null
}

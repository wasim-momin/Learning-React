import { useNavigate } from "react-router-dom";
import fileService from "../services/file"

export default function PostCard({ $id, title, featuredImage, content }) {

  const navigate = useNavigate()
  const imgPreview = fileService.previewFile(featuredImage)

  return (
    <div
      onClick={()=>navigate(`/posts/${$id}`)}
      className="cursor-pointer block bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
    >
      <img
        src={imgPreview}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {title}
      </h2>
      <p className="text-gray-600 text-sm line-clamp-2">{content}</p>
    </div>
  );
}

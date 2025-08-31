import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "../common/";
import { Trash2 } from "lucide-react";

// case 1 using controller
// export default function UploadImageFile({ name, control, defaultValues = "" }) {
//   const [previewImage, setPreviewImage] = useState(null);

//   const { register } = useForm();

//   return (
//     <Controller
//       name={name || "image"}
//       control={control}
//       render={({ field: { onChange } }) => {
//         const handleFileChange = (e) => {
//           const file = e.target.files[0];

//           if (file) {
//             setPreviewImage(URL.createObjectURL(file));
//             onChange(file);
//             console.log("prev img", previewImage);
//           }
//         };

//         return (
//           <div className="flex flex-col items-center gap-2">
//             <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
//               <p className="text-gray-500 text-sm">
//                 Click to upload or drag & drop
//               </p>
//               <Input
//                 type="file"
//                 className="hidden"
//                 accept="image/png, image/jpg, image/jpeg, image/gif"
//                 onChange={handleFileChange}
//               />
//             </label>
//             {previewImage && (
//               <div className="relative w-full mt-2">
//                 <img
//                   alt="Preview"
//                   className="w-full h-48 object-cover rounded-lg border"
//                   src={previewImage}
//                   />
//                 <button
//                   onClick={() => setPreviewImage(null)}
//                   className="absolute -top-2 -right-2 p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
//                 >
//                   <Trash2 className="w-5 h-5 text-red-600" />
//                 </button>
//               </div>
//             )}
//           </div>
//         );
//       }}
//     />
//   );
// }

export default function UploadImageFile({register, defaultImage, onFileChange}) {

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(()=>{
    if(defaultImage) setPreviewImage(defaultImage)
  },[previewImage])

  const handleFileChange = (e)=>{
    const file = e.target.files[0]
    if(file){
      setPreviewImage(URL.createObjectURL(file))
      onFileChange?.(file)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
        <p className="text-gray-500 text-sm">Click to upload or drag & drop</p>
        <Input
          type="file"
          className="hidden"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          // {...register("image")}
          // onChange={(e)=>handleFileChange(e)}
          {...register("image", {
            onChange: handleFileChange, 
          })}

        />
      </label>
      {previewImage && (
        <div className="relative w-full mt-2">
          <img
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border"
            src={previewImage}
          />
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute -top-2 -right-2 p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
          >
            <Trash2 className="w-5 h-5 text-red-600" />
          </button>
        </div>
      )}
    </div>
  );
}

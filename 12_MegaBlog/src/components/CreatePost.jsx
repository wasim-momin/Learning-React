import { Input, Select, UploadImageFile } from "./common";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import RTEditor from "./RTEditor";
import { useNavigate } from "react-router-dom";
import fileService from "../services/file";
import postService from "../services/post";
import { useSelector } from "react-redux";

export default function CreatePost({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [selectedFile, setSelectedFile] = useState(null);

  console.log("creta post user", userData);

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        image: post?.image || "",
        status: post?.status || "active",
      },
    });

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  const handleSubmitPost = async (data) => {
    const file = data.image[0]
      ? await fileService.uploadFile(data.image[0])
      : null;

    console.log("HANDLE SUBMIT DATA", data);
    console.log("Selected file in parent state:", selectedFile);
    console.log("file:", file);

    if (post) {
      if (file) {
        fileService.deleteFile(post.featuredImage); // yaha per jo featuredImage use wo data ke col ke name honga
      }
      const dbUpdatePost = await postService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbUpdatePost) {
        navigate(`/post/${dbUpdatePost.$id}`);
      }
    } else {
      if (file) {
        data.featuredImage = file.$id;
        const dbCreatePost = await postService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbCreatePost) {
          navigate(`/post/${dbCreatePost.$id}`);
        }
      }
    }
  };

  const handleFileChange = (file) => {
    console.log("Parent received file:", file);
    setSelectedFile(file); // state me store kar do
    // future me API call ya additional logic yahan laga sakte ho
  };

  return (
    <div className=" bg-[#172842] py-10 px-4 rounded-2xl">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {post ? "Update" : "Create"} New Post
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit(handleSubmitPost)}
        >
          {/* Left Column: Title + Content */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Post Title
              </label>
              <Input
                type="text"
                placeholder="Enter post title..."
                {...register("title", {
                  required: true,
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug
              </label>
              <Input
                type="text"
                placeholder="slug"
                disabled
                {...register("slug", { required: true })}
                onInput={(e) => {
                  setValue("slug", slugTransform(e.currentTarget.value), {
                    shouldValidate: true,
                  });
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <RTEditor
                name="content"
                control={control}
                defaultValue={getValues("content")}
              />
            </div>
          </div>

          {/* Right Column: Feature Image + Preview + Status */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Feature Image
              </label>
              {/* case 1 controller */}
              {/* <UploadImageFile 
              name="featuredImage"
              control={control}/> */}

              <UploadImageFile
                register={register}
                defaultImage={post?.image}
                onFileChange={handleFileChange}
              />
              {post && (
                <div className="relative w-full mt-2">
                  <img
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                </div>
              )}
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <Select
                options={["active", "inactive"]}
                {...register("status", { required: true })}
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="cursor-pointer px-6 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {post ? "Update" : "Create"} Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

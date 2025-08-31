import { Trash2 } from "lucide-react";
import { Input, Select } from "./common";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import RTEditor from "./RTEditor";

export default function CreatePost({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
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

  return (
    <div className=" bg-[#172842] py-10 px-4 rounded-2xl">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {post ? "Update" : "Create"} New Post
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                defaultValue={getValues}
              />
            </div>
          </div>

          {/* Right Column: Feature Image + Preview + Status */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Feature Image
              </label>
              <div className="flex flex-col items-center gap-2">
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                  <p className="text-gray-500 text-sm">
                    Click to upload or drag & drop
                  </p>
                  <Input
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                  />
                </label>

                {post && (
                  <div className="relative w-full mt-2">
                    <img
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border"
                    />
                  </div>
                )}

                <div className="relative w-full mt-2">
                  <img
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border"
                  />
                  <button className="absolute -top-2 -right-2 p-2 rounded-full bg-red-100 hover:bg-red-200 transition">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
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
              className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {post ? "Update" : "Create"} Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

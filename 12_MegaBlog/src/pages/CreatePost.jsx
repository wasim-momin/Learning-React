import { Trash2 } from "lucide-react";

export default function CreatePost() {
  return (
    <div className=" bg-[#172842] py-10 px-4 rounded-2xl">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create New Post
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Title + Content */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Post Title
              </label>
              <input
                type="text"
                placeholder="Enter post title..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                rows="8"
                placeholder="Write your post content..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none resize-none"
              ></textarea>
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
                  <input type="file" className="hidden" />
                </label>

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
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-gray-50">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
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
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function ApiCall() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch("https://api.github.com/users/wasim-momin")
//       .then((resp) => resp.json())
//       .then((resp) => setData(resp));
//   });
const data = useLoaderData()
  return (
    <div
      className="max-w-sm w-full my-10 m-auto shadow-md rounded-2xl p-4 flex items-center gap-4 hover:shadow-lg transition-shadow duration-200 bg-gray-900"    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
            src={data.avatar_url}
            alt={`${data.login}'s avatar`}
            className="h-16 w-16 rounded-full object-cover"
          />
      </div>

      {/* Info */}
      <div className="min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-medium text-white truncate">
            @{data.name || "No Name"}
          </h3>
        </div>

        <p className="text-sm text-white">
            {data.bio}
          </p>
      </div>
    </div>
  );
}

export const apiloaderinfo = async()=>{
    const respone = await fetch("https://api.github.com/users/wasim-momin")
    if(!respone.ok) throw new Response("Failed to fetch", {status: respone.status})
    return respone.json()
}
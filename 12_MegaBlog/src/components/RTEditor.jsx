import { Editor } from "@tinymce/tinymce-react";

import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/models/dom";

import { Controller } from "react-hook-form";

export default function RTEditor({ name, control, label, defaultValue = "" }) {

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field: { onChange, value } }) => (
          <textarea
            rows="5"
            placeholder="Write your post content..."
            className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full disabled:cursor-not-allowed disabled:opacity-70"
            onChange={onChange}
            value={value}
          ></textarea>
        )}
      />
    </div>
  );
}

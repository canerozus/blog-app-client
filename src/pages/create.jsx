import { useState, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
export default function CreatePost() {
    const [value, setValue] = useState("");
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
  
    return (
<form className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
  <div className="px-4 py-2 bg-gray-100 font-bold text-lg">Create a New Post</div>
  <div className="p-4">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
      <input className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" type="text" id="title" name="title" placeholder="Enter a title for your post" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="summary">Summary</label>
      <textarea className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" id="summary" name="summary" placeholder="Enter a summary for your post"></textarea>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="image-file">Image File</label>
      <input className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" type="file" id="image-file" name="image-file" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="content">Content</label>
      <div className=" rounded-md mb-6 pb-12">
        <ReactQuill className="h-56" theme="snow" value={value} onChange={setValue} />
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none" type="submit">Create Post</button>
      </div>
    </div>
  </div>
</form>

    )
}

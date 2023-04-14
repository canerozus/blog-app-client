import { useState, useMemo, useContext, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { UserContext } from '@/context/userContext';
import withAuth from "@/components/Protected";
import Navbar from "@/components/Navbar";

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}
const formats =
    [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

function EditPost() {
    const router = useRouter()
    const { id } = router.query
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [content, setContent] = useState("");
    const [infomsg, setInfomsg] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    useEffect(() => {
        fetch(`https://blog-mern-app.herokuapp.com/api/post/${id}`)
        .then(res => res.json())
        .then(postInfo => {
            setTitle(postInfo.title);
            setContent(postInfo.content);
            setSummary(postInfo.summary);
            
        })
    }, [])

    const updatePost = async (e) => {
        try {
            const data = new FormData();
            data.set('title', title);
            data.set('summary', summary);
            data.set('content', content);
            data.set('file', files[0]);
            data.set('id', id);
            e.preventDefault();
            const response = await fetch(`https://blog-mern-app.herokuapp.com/api/post/${id}`, {
                method: "PUT",
                body: data,
                credentials: "include"
            })
            const info = await response.json()
            console.log(data)
            if (response.ok) {
                setInfomsg(info.message)
                setTimeout(() => {
                    setRedirect(true)
                }, 1500)
            } else {
                setInfomsg(info.message)
            }
        } catch (error) {
            console.log(error)
        }
    }


    if (redirect) {
        router.push(`/post/${id}`);
    }
    return (
        <>
            <Navbar />
            <form className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-12" onSubmit={updatePost}>
                <div className="px-4 py-2 bg-gray-100 font-bold text-lg">Edit Post</div>
                <div className="p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
                        <input className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" type="text" id="title" name="title" placeholder="Enter a title for your post"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="summary">Summary</label>
                        <input className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" id="summary" name="summary" placeholder="Enter a summary for your post"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="image-file">Image File</label>
                        <input className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" type="file" id="image-file" name="image-file"
                            onChange={(e) => setFiles(e.target.files)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="content">Content</label>
                        <div className=" rounded-md mb-6 pb-12">
                            <ReactQuill className="h-56" theme="snow" modules={modules} formats={formats}
                                value={content}
                                onChange={(newValue) => setContent(newValue)}
                            />
                        </div>
                        {infomsg && <p>{infomsg}</p>}
                        <div className="flex justify-end">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none" type="submit">Update Post</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default withAuth(EditPost)
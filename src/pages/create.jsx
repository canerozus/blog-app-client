import React from 'react';
import "react-quill/dist/quill.snow.css";
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
export default function CreatePost() {
    return (
        <form>
            <input type="title" placeholder={'Title'} />
            <input type="summary" placeholder={'Summary'} />
            <input type="file" />
            <ReactQuill/>
            <button type="submit">Send</button>
        </form>
    )
}

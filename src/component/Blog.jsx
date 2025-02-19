import React from 'react'
import { useParams } from 'react-router-dom'

const BLOGS = [
    {
        slug: "goc-nguoi-tieu-dung",
        name: "Góc người tiêu dùng"
    },
    {
        slug: "nuoc-ngot-co-ga",
        name: "Nước ngọt có ga"
    },
]
const Blog = () => {
    const { code } = useParams();

    const getBlog = () => {
        const index = parseInt(code);
        const blog = BLOGS[index - 1];
        console.log("blog", index - 1);

        return <div>
            <h2>{blog?.name}</h2>
        </div>


    }

    return (
        <div>
            <h1>Blog</h1>
            {getBlog()}
        </div>
    )
}


export default Blog
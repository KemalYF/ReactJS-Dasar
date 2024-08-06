// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
// import postsData from "../../posts.json";

function Blog () {
    // pakai state
    // const [posts, setPosts] = useState([]);
    
    // pakai loader
    const posts = useLoaderData();
    
    // const [externalPosts, setExternalPosts] = useState([]);

    // useEffect = gunanya untuk menjalankan sesuatu ketika komponen di render
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setPosts(data);
    //             // console.log(data);
    //         });

    //     return () => {
    //         console.log("Component is cleared");
    //     }
    // }, []);

    return (
        <>
            <h2>My Blog Post</h2>
            {posts.map((item, index) => (
                <div key={index}>
                    <Link className="linkBlog" to={`/blog/${item.id}`}>- {item.title}</Link>
                </div>
                // <div title={item.title} key={index}>-{item.title}</div>
            ))}
        </>
    );
}

export default Blog;
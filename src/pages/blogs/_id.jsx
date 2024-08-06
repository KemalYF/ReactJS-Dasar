// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

function SinglePost () {
    // pakai state
    // const params = useParams();
    // const [post, setPosts] = useState(null);
    
    // pakai loader
    const post = useLoaderData();

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             setPosts(json);
    //         });

    //     return () => {
    //         console.log("Component is cleared");
    //     }
    // })

    return (
        <>
        <h1>{post?.title}</h1>
        <p>Ini adalah {post?.body}</p>
        </>
    );
}

export default SinglePost;
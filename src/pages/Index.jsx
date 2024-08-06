// useState = digunakan untuk membuat state pada function component
import {useState, useEffect} from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage () {
    // const changeSearch = (event) => {
    //     console.log(event.target.value);
    //     // cara biasa
    //     // search = event.target.value;
        
    //     // cara hooks
    //     setSearch(event.target.value);
    // }

    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);

    useEffect(() => {
        console.log("Posts data changed");
    }, [posts]);

    const onSearchChange = (value) => {
        // console.log(value);
        const filteredPosts = postsData.filter((item) => 
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    }

    return (
        <>
            <h1>Welcome to my website!</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
            {/* cara biasa */}
            {/* {Posts.map(({title, tags, date}, index) => ( */}
            {/* cara props */}
            {posts.map((props, index) => (
                // cara biasa
                // <Article title={title} tags={tags} date={date} key={index} />

                // cara destructuring
                // <Article {...{title, tags, date}} key={index} />

                // cara props
                <Article {...props} key={index} />
            ))}
        </>
    );
}

export default Homepage;
export const post = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
}

export const singlePost = ({params}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
}
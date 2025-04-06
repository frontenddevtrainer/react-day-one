import { useEffect, useState } from "react";

async function getAPIData(url) {
    const response = await fetch(url);
    return await response.json();
}

function PostListing() {

    const [posts, setPosts] = useState(null);

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    useEffect(function () {

        async function callApi() {
            const postsData = await getAPIData(apiUrl);
            setPosts(postsData)
        }

        callApi();

    }, []);
    // Lifecycle hook componentDidMount;


    if (!posts) {
        return <div style={{ backgroundColor: "green" }}>Loading..</div>
    }


    return <ul>
        {
            posts.map(function (item) {
                return <li onClick={function () { alert(item.title) }}>
                    <span style={{ fontSize: "24px" }}>{item.id}</span>
                    {item.title}
                    {item.id % 2 === 1 ? <span style={{ color: "blue" }}>{item.body}</span> : null}
                </li>
            })
        }
    </ul>
}

export default PostListing
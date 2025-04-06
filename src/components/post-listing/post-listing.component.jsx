import { useEffect, useState } from "react";

async function getAPIData(url){
    const response = await fetch(url);
    return await response.json();
}

function PostListing(){

    const [posts, setPosts] = useState([]);

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    useEffect(function(){

        async function callApi(){
            const postsData = await getAPIData(apiUrl);
            setPosts(postsData)
        }

        callApi();

    }, []);
    // Lifecycle hook componentDidMount;

    

    return <ul>
        {
            posts.map(function(item){
                return <li onClick={function(){ alert(item.title) }}>{item.title}</li>
            })
        }
    </ul>
}

export default PostListing
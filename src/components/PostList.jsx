import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () =>
{

const {postList, addInitialPosts} =  useContext(postListData);

useEffect(()=>
{
    fetch("https://dummyjson.com/posts")
    .then((res)=>res.json())
    .then((data) => {
        console.log(data,"dataaa");
        addInitialPosts(data.posts);
    });
},[]);

// const handleGetPostsClick = () => { 
//     fetch("https://dummyjson.com/posts")
//     .then((res)=>res.json())
//     .then((data) => {
//         console.log(data,"dataaa");
//         addInitialPosts(data.posts);
//     });
// };

console.log("postlist here ",postList);

    return (
<>
{postList.length === 0 && (<WelcomeMessage  />)}
{/* {postList.length === 0 && (<WelcomeMessage onGetPostsClick={handleGetPostsClick} />)} */}

{postList.map((post)=>(<Post key={post.id} post={post}/>))}

<Post></Post>
</>
    );
};

export default PostList;    
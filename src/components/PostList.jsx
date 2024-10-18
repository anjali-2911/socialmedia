import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";

const PostList = () =>
{

const {postList} =  useContext(postListData);
console.log("postlist here ",postList);

    return (
<>
{postList.map((post)=>(<Post key={post.id} post={post}/>))}

<Post></Post>
</>
    );
};

export default PostList;    
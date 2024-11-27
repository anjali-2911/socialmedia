import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";


const Post = ({ post }) => {

   const { deletePost } = useContext(PostList);


  // Check if the post object is valid before accessing its properties
  if (!post) {
    return <div><WelcomeMessage/></div>;  // or some other fallback UI
  }

  console.log("post here ", post?.title);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title || "No Title Available"}</h5>
        
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        
        onClick={()=> deletePost(post.id )}>

          <AiFillDelete/>
          </span> 


        <p className="card-text">
          {post.body}
        </p>
{post.tags.map((tags) => (<span key={tags} className="badge text-bg-primary hashtag">{tags}</span>))}
<div className="alert alert-success" role="alert">
  This post has been reacted by {post.reactions.likes}
</div>

      </div>
      
    </div>
  );
};

export default Post;

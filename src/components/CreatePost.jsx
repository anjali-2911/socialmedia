import { useContext, useRef } from "react";
import { PostList } from '../store/post-list-store'

const CreatePost = () =>{

  const {addPost} = useContext(PostList);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const userId = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "",
    postTitleElement.current.value = "",
    postBodyElement.current.value = "",
    reactionsElement.current.value = "",
    tagsElement.current.value = "",

    addPost(userId, postTitle, postBody,reactions,tags);

  }

 
    return (
<form className="create-post" onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">User ID</label>
    <input type="text" ref={userIDElement} className="form-control" id="userId" placeholder="Enter your user Id here"/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today"/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">post content</label>
    <textarea  rows= "4" ref={postBodyElement} type="text" className="form-control"  id="body" placeholder="tell us more about it"/>
   </div>

   <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input type="text" ref= {reactionsElement} className="form-control" id="reactions" placeholder="How many reactions for this post"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Tags</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter tags with space"/>
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    );
};

export default CreatePost;
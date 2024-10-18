import { createContext, useReducer} from 'react';



export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

//reducer function
const PostListReducer = (currPostList, action)=> {

    let newPostList = currPostList;
    if(action.type === "DELETE_POST")
    {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }
    else if(action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList];
    }


    
    return newPostList;
}

const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST)

    const addPost = (userId, postTitle, postBody,reactions,tags) => {
        console.log("Add Post", userId, postTitle, postBody,reactions,tags);

        dispatchPostList({
            type : "ADD_POST",
            payload : {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        })
    };
    const deletePost = (postId) => {
        console.log(`"delete", ${postId}`)

        dispatchPostList({
            type: 'DELETE_POST',
            payload : {
                postId
            },
        })
    };

    return <PostList.Provider value= {{postList, addPost, deletePost}}>
              {children}
           </PostList.Provider>
};

const DEFAULT_POST_LIST = [
    {
        id: 1,
        title : "going to study",
        body : "im learning reactjs with hooks and redux.",
        reactions : 2,
        userId : "user-9",
        tags : ["vacation", "pune", "study"]
    },

    
    {
        id: 2,
        title : "going to vacation",
        body : "im learning how to swim. my friend teaching me the steps.",
        reactions : 5,
        userId : "user987",
        tags : ["swimming", "lake", "friends"]
    }
]

export default PostListProvider;
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import SideBar from './components/SideBar'
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";


function App() {
const [selectedTab , setSelectedTab] = useState("Create Post");
  return (
    <>
    <PostListProvider>

    <div className="app-container">

      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>

      <div className="content">
      <Header></Header>

      {selectedTab === 'Home' ? <PostList></PostList> : <CreatePost></CreatePost>
}


      </div>

    </div>
    </PostListProvider>
    </>
  )
}

export default App

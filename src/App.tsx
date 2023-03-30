import React, { useEffect, useState } from "react";

import "./App.scss";

import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./views/home-page";
import NavBar from "./components/nav-bar";
import PostDetails from "./views/post-details-page";
import NotFoundPage from "./views/not-found-page";
import { Toast, ToastContainer } from "react-bootstrap";
import { PostModel } from "./models/post-model";
import PostService from "./services/post-service";

function App() {

  const navigate = useNavigate();
  const [showToaster, setShowToaster] = useState(false);
  const [postsList, setPostsList] = useState<Array<PostModel>>([]);
  const showToasterMsg = () => {
    setShowToaster(true);
  };
  useEffect(() => {
    if (postsList.length <= 0) {
      PostService.getAllPosts().then((res) => setPostsList(res.data));
    }
  }, [postsList]);
  const pushNewPostHandler = (newPost: PostModel) => {
    setPostsList([newPost,...postsList ]);
   navigate(`/posts/${newPost.id}`, { replace: true });
  };
  return (
    <div className='App'>
      <NavBar showToasterMsg={showToasterMsg} pushNewPost={pushNewPostHandler} />
      <Routes>
        <Route path='/' element={postsList.length > 0 && <HomePage postsList={postsList} />} />
        <Route path='posts/:postId' element={<PostDetails postsList={postsList} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ToastContainer className='p-3' position={"bottom-end"}>
        <Toast
          show={showToaster}
          onClose={() => setShowToaster(false)}
          delay={3000}
          autohide
          className='d-inline-block m-1'
          bg={"success"}>
          <Toast.Header>
            <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
            <strong className='me-auto'>Adding New Post</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>post was created successfully</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default App;

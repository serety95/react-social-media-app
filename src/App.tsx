import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import HomePage from "./views/home-page";
import NavBar from "./components/nav-bar";
import PostDetails from "./views/post-details-page";
import NotFoundPage from "./views/not-found-page";
import { Toast, ToastContainer } from "react-bootstrap";

function App() {
  const [showToaster, setShowToaster] = useState(false);

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='posts/:postId' element={<PostDetails />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ToastContainer className='p-3' position={"bottom-end"}>
        <Toast show={showToaster} onClose={() => setShowToaster(false)} className='d-inline-block m-1' bg={"success"}>
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

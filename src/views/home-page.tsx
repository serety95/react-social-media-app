import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PostService from "../services/post-service";
import { PostModel } from "../models/post-model";
import { Link } from "react-router-dom";

function HomePage() {
  const [postsList, setPostsList] = useState([]);
  ///console.log(PostService.postsList);

  
  PostService.getAllPosts().then((res) => setPostsList(res.data));
  return (
    <div className='container'>
      {postsList &&
        postsList.map((post: PostModel) => (
          <Link className='post-anchor' to={`posts/${post.id}`}>
            <div key={post.id} className='row card shadow m-2'>
              <span className='col-12 fw-bolder'>{post?.title}</span>
              <span className='col-12'>{post?.body.length > 150 ? post?.body.slice(0, 150) : post?.body}</span>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default HomePage;

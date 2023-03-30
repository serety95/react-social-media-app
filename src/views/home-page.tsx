import React, { useState } from "react";
import PostService from "../services/post-service";
import { PostModel } from "../models/post-model";
import Post from "../components/post";

function HomePage(props:any) {

  return (
    <div className='container'>
      {props.postsList && props.postsList.map((post: PostModel) => <Post {...post} key={`post-${post.id}`} />)}
    </div>
  );
}

export default HomePage;

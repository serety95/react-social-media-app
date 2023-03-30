import React, { useState } from "react";
import { CommentModel } from "../models/comment-model";

const Comment = (props: CommentModel) => {
  console.log(props);
  const [comment, setComment] = useState();

  return (
    <div className='card p-2 mb-2'>
      <span className='fw-bolder'>{props.name}</span>
      <span> {props.body}</span>
    </div>
  );
};

export default Comment;

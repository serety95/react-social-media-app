import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../services/post-service";
import { PostModel } from "../models/post-model";
import { CommentModel } from "../models/comment-model";
function PostDetailsPage() {
  const [postDetails, setPostDetails] = useState<PostModel>({ title: "", body: "", userId: 0 });

  const [postComments, setPostComments] = useState<Array<CommentModel>>([]);

  let { postId } = useParams();
  PostService.getPost(+postId!).then((res) => {
    PostService.getPostComments(+postId!).then((res) => {
      setPostComments(res.data);
    });

    setPostDetails(res.data);
  });

  return (
    postDetails && (
      <div className='container'>
        <span className='row'>{postDetails?.title}</span>
        <span className='row'>{postDetails?.body}</span>

        {postComments && (
          <div className='row'>
            {postComments.map((comment) => (
              <div className='card m-2 col-12'>
                <span className='fw-bolder'>{comment.name}</span>
                <span> {comment.body}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  );
}

export default PostDetailsPage;

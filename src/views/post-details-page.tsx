import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../services/post-service";
import { PostModel } from "../models/post-model";
import { CommentModel } from "../models/comment-model";
function PostDetailsPage(...props: any) {
  let { postId } = useParams();
  let myPost = props?.post?.filter((x: PostModel) => x.id == postId);

  //console.log(props.post)
  const [postDetails, setPostDetails] = useState<PostModel | null>(null);

  const [postComments, setPostComments] = useState<Array<CommentModel>>([]);

  if (myPost) {
    console.log(myPost,postDetails)
    setPostDetails(myPost);
  }

  useEffect(() => {
    console.log("hii post", postDetails);
    if (!postDetails) {
      console.log("hii");
      PostService.getPost(+postId!).then((res) => {
        setPostDetails(res.data);
      });
    }

    return () => {
      console.log("hii2");
      PostService.getPostComments(+postId!).then((res) => {
        setPostComments(res.data);
      });
    };
  }, [postDetails]);

  return (
    postDetails && (
      <div className='container'>
        <span className='row'>{postDetails?.title}</span>
        <span className='row'>{postDetails?.body}</span>

        {postComments ? (
          <div className='row'>
            {postComments.map((comment) => (
              <div key={comment.id} className='card m-2 col-12'>
                <span className='fw-bolder'>{comment.name}</span>
                <span> {comment.body}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>no comments</div>
        )}
      </div>
    )
  );
}

export default PostDetailsPage;

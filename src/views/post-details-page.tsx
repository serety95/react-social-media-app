import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../services/post-service";
import { PostModel } from "../models/post-model";
import { CommentModel } from "../models/comment-model";
function PostDetailsPage(props: any) {
  let { postId } = useParams();

  const [postDetails, setPostDetails] = useState<PostModel | null>(null);
  const [postComments, setPostComments] = useState<Array<CommentModel>>([]);

  useEffect(() => {
    if (!postDetails) {
      let myPost = props?.postsList?.find((post: PostModel) => post.id === +postId!);
      if (!myPost) {
        PostService.getPost(+postId!).then((res) => {
          setPostDetails(res.data);
        });
      } else {
        setPostDetails(myPost);
      }
    }

    return () => {
      PostService.getPostComments(+postId!).then((res) => {
        setPostComments(res.data);
      });
    };
  }, [postDetails]);

  return postDetails ? (
    <div className='container'>
      <div className='row card shadow m-2 p-3'>
        <span className='col-12 fw-bolder text-capitalize'>{postDetails?.title}</span>
        <span className='col-12'>{postDetails?.body}</span>
        <span className='col-12 my-2 post-img'>
          <img
            className='img-fluid img-thumbnail'
            src='https://scontent.fcai21-3.fna.fbcdn.net/v/t31.18172-8/12000837_764846786970516_8871490860410260806_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGUkNacVpR7Cl79P5-P6bMkYlHq84OnuQpiUerzg6e5CiUe9xQVgjr1c5pgzMoStvo&_nc_ohc=CoFlVZEYYMkAX_6EmzG&_nc_ht=scontent.fcai21-3.fna&oh=00_AfCBdhNvJnJ579-cZfEtmXVblMaK12NOIFmDZG3CZ3EezA&oe=644C0D04'
            alt='post-image'
          />
        </span>
        <span className='col-12'>
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
        </span>
      </div>
    </div>
  ) : (
    <div className='container'>no post</div>
  );
}

export default PostDetailsPage;

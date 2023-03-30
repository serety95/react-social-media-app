import { CommentModel } from "../models/comment-model";

const Comment = (props: CommentModel) => {
  return (
    <div className='comment p-2 mb-2'>
      <div className='comment-header '>
        <span className='avatar-span'>
          <img src='https://cdn-icons-png.flaticon.com/512/147/147140.png' alt={props.name} />
        </span>
        <span className=' d-flex flex-column'>
          <span className='fw-bolder'>{props.name}</span>
          <span className='fw-bolder text-black-50'>{props.email}</span>
        </span>
      </div>

      <div className='comment-body'> {props.body}</div>
    </div>
  );
};

export default Comment;

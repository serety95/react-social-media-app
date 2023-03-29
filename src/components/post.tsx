import React from "react";
import { PostModel } from "../models/post-model";
import { Link } from "react-router-dom";

const Post = (props: PostModel) => {

  return (
    <Link className='post-anchor' to={`posts/${props.id}`}>
      <div className='row card shadow m-2 p-3'>
        <span className='col-12 fw-bolder text-capitalize'>{props?.title}</span>
        <span className='col-12'>{props?.body.length > 150 ? props?.body.slice(0, 150) : props?.body}</span>
        <span className='col-12 my-2 post-img'>
          <img
          className="img-fluid img-thumbnail"
            src='https://scontent.fcai21-3.fna.fbcdn.net/v/t31.18172-8/12000837_764846786970516_8871490860410260806_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGUkNacVpR7Cl79P5-P6bMkYlHq84OnuQpiUerzg6e5CiUe9xQVgjr1c5pgzMoStvo&_nc_ohc=CoFlVZEYYMkAX_6EmzG&_nc_ht=scontent.fcai21-3.fna&oh=00_AfCBdhNvJnJ579-cZfEtmXVblMaK12NOIFmDZG3CZ3EezA&oe=644C0D04'
            alt='post-image'
          />
        </span>
      </div>
    </Link>
  );
};

export default Post;

import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import AddPostModal from "./add-post-modal";
import { PostModel } from "../models/post-model";
import { ReactComponent as LogoSvg } from "../logo.svg";

function NavBar(props: any) {
  const locationPath = useLocation().pathname;
  console.log(locationPath);

  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const closeModalHandler = () => {
    setShowAddPostModal(false);
    props.showToasterMsg();
  };
  const addNewPostHandler = (newPost: PostModel) => {
    props.pushNewPost(newPost);
  };
  return (
    <Navbar bg='dark' variant='dark' sticky={"top"}>
      <Container>
        <Navbar.Brand>
          <LogoSvg />
          ObJPOSTS
        </Navbar.Brand>
        <Nav className=''>
          <NavLink className='nav-link' to='/' end>
            Home
          </NavLink>
          <NavLink onClick={(e) => e.preventDefault()} className='nav-link' to='/posts'>
            posts
          </NavLink>
        </Nav>
        <Button
          disabled={locationPath !== "/"}
          variant='primary'
          onClick={() => setShowAddPostModal(true)}
          aria-labelledby='contained-modal-title-vcenter'>
          Add Post
        </Button>
        <AddPostModal show={showAddPostModal} closeModal={closeModalHandler} addNewPost={addNewPostHandler} />
      </Container>
    </Navbar>
  );
}

export default NavBar;

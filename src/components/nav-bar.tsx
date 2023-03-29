import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AddPostModal from "./add-post-modal";

function NavBar() {
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const closeModalHandler = () => {
    setShowAddPostModal(false);
  };
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink className='nav-link' to='/' end>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/posts'>
            posts
          </NavLink>
        </Nav>
        <Button
          variant='primary'
          onClick={() => setShowAddPostModal(true)}
          aria-labelledby='contained-modal-title-vcenter'>
          Add Post
        </Button>
        <AddPostModal show={showAddPostModal} closeModal={closeModalHandler} />
      </Container>
    </Navbar>
  );
}

export default NavBar;

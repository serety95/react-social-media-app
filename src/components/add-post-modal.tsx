import React from "react";
import { Button, Modal } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PostModel } from "../models/post-model";
import PostService from "../services/post-service";
const schema = yup
  .object({
    title: yup.string().required().min(5).max(30),
    body: yup.string().required().min(5).max(300),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function AddPostModal(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data, e) => {
    e?.preventDefault();

    let newPost: PostModel = { ...data, userId: 1 };
    PostService.addNewPost(newPost).then((res)=>props.addNewPost(res.data))
    reset();
    props.closeModal();
  };
  //const [showToaster, setShowToaster] = useContext(postToasterContext);

  return (
    <Modal show={props.show} onHide={props.closeModal} size='lg' centered backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title>Add Post</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input type='text' id='title' className='form-control' {...register("title")} />
          <p className='text-danger'>{errors.title?.message}</p>
          <label htmlFor='body' className='form-label'>
            Body
          </label>
          <textarea id='body' className='form-control' {...register("body")} />
          <p className='text-danger'>{errors.body?.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.closeModal}>
            Close
          </Button>
          <Button disabled={!isValid} type='submit'>
            Add
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddPostModal;

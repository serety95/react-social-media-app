import { PostModel } from "./../models/post-model";
import axios from "axios";

let postsList:PostModel[]=[]
const PostService = {
  addNewPost,
  getAllPosts,
  getPost,
  getPostComments,
};
function addNewPost(newPost: PostModel): Promise<any> {
  return axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
}
function getAllPosts():Promise<any> {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}
function getPost(postId:number): Promise<any> {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}
function getPostComments(postId: number) {
 return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}

export default PostService;

import { PostModel } from "../models/post-model";
import Post from "../components/post";

function HomePage(props:any) {

  return (
    <main className='container'>
      {props.postsList && props.postsList.map((post: PostModel, i:number) => <Post {...post} key={`post-${i}`} />)}
    </main>
  );
}

export default HomePage;

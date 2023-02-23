import axios from "axios";
import { useState, useEffect } from "react";


function Post() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
   getPosts()
  }, [])

  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data)
      // console.log(response.data);

    });
  }

  
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Post</h1>
       
      </div>

      <h2>All Posts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            { posts.map((post, index) => {
              
              <tr key={index}>
                <td>{post?.id}</td>
                <td>{post?.title}</td>
                <td>{post?.body}</td>
              </tr>;
            })}
            
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Post;

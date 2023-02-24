import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Post</h1>
      </div>

      <h4>All Posts</h4>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {!!posts &&
              posts.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <NavLink
                        to={`/posts/${post.id}`}
                        className="btn btn-sm btn-info me-1">
                        View
                      </NavLink>
                      <button className="btn btn-sm btn-primary me-1">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Post;

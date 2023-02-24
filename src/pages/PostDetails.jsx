import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Post Details</h1>
      </div>
      <div className="row">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <dt className="col-sm-2">ID</dt>
              <dd className="col-sm-10">{post.id}</dd>
            </div>
            <div className="row">
              <dt className="col-sm-2">Title</dt>
              <dd className="col-sm-10">{post.title}</dd>
            </div>
            <div className="row">
              <dt className="col-sm-2">Body</dt>
              <dd className="col-sm-10">{post.body}</dd>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostDetails;

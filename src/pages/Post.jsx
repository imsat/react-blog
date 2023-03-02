import axios from "axios"
import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import Swal from "sweetalert2"

function Post() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            Swal.fire({
              text: "Deleted successfully!",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1000,
            })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>Post</h1>
      </div>

      <h4>
        All Posts
        <Link to="/add-post" className="btn btn-sm btn-primary float-end ">
          Add New
        </Link>
      </h4>
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
                      <NavLink
                        to={`/posts/edit/${post.id}`}
                        className="btn btn-sm btn-primary me-1">
                        Edit
                      </NavLink>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="btn btn-sm btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Post

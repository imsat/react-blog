import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function AddPost() {
    const navigate = useNavigate()
    const initialState = {
    title: "",
    body: "",
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePostCreate = (event) => {
    event.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/posts", formData)
    .then((response) => {
         Swal.fire({
           text: "Added successfully!",
           toast: true,
           position: "top-end",
           showConfirmButton: false,
           timer: 1000,
         })
         navigate("/posts")
    })
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h1>Create Post</h1>
      </div>
      <form onSubmit={handlePostCreate}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <input
            type="text"
            className="form-control"
            name="body"
            onChange={handleChange}
            id="body"
            value={formData.body}
            required
          />
        </div>
        <button type="submit" className="me-1 btn btn-success btn-sm">
          Submit
        </button>
        <Link to="/posts" type="submit" className="btn btn-danger btn-sm ">
          Cancel
        </Link>
      </form>
    </>
  )
}

export default AddPost

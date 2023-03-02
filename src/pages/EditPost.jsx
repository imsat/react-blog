import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"

function EditPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const initialState = {
    title: "",
    body: "",
  }
  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const postDetails = response?.data
        setFormData({ ...formData,
             title: postDetails.title,
             body: postDetails.body
            })
      })
  }, [])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePostCreate = (event) => {
    event.preventDefault()
    axios
      .patch("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        Swal.fire({
          text: "Updated successfully!",
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
        <h1>Edit Post</h1>
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
          />
        </div>
        <button type="submit" className="me-1 btn btn-success btn-sm">
        Update 
        </button>
        <Link to="/posts" type="submit" className="btn btn-danger btn-sm ">
          Cancel
        </Link>
      </form>
    </>
  )
}

export default EditPost

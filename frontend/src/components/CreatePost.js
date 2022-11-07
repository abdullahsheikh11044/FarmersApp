import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPost = () => {
  let navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  const addNewPost = async () => {
    let formField = new FormData();
    formField.append("title", title);
    formField.append("body", body);


    if (image !== null) {
      formField.append("image", image);
    }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/posts/post_api_create/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/home");
    });
  };

  return (
    <div className="container">
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Student</h2>

          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Title"
              name="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Description"
              name="email"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addNewPost}>
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

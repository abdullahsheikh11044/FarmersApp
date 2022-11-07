import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  let loadPosts = async () => {
    const result = await axios.get(
      `http://127.0.0.1:8000/posts/post_api_update/${id}`
    );
    console.log(result.data.title);

    setImage(result.data.image);
    setTitle(result.data.title);
    setBody(result.data.body);
  };

  const updateSinglePost = async () => {
    let formField = new FormData();

    formField.append("title", title);
    formField.append("body", body);

    if (image !== null) {
      formField.append("image", image);
    }

    await axios({
      method: "Post",
      url: `http://127.0.0.1:8000/posts/post_api_update/${id}/`,
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/home");
    });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A Post</h2>

        <div className="form-group">
          <img src={image} height="100" width="200" alt="" srcSet="" />
          <label>Upload Image</label>
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
            placeholder= ""
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder=""
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          onClick={updateSinglePost}
          className="btn btn-primary btn-block"
        >
          Update Post
        </button>
      </div>
    </div>
  );
};

export default UpdatePost;

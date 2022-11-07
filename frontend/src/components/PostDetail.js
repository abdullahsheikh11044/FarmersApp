import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSinglePost();
  }, []);

  const getSinglePost = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/posts/post_api_detail/${id}/`
    );
    console.log(data);
    setPost(data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/posts/post_api_delete/${id}/`);
    navigate("/home");
  };

  return (
    <div>
      <h2>Detail of Single Post </h2>
      <hr></hr>
      <div className="full-student-detail">
        <img src={post.image} height="300" width="500" />
        <div className="student-detail">
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      </div>

      <Link className="btn btn-outline-primary mr-2" to={'/PostUpdate' + `/${post.id}/`}>
        Update
      </Link>
      <Link className="btn btn-danger" onClick={() => deleteUser(post.id)}>
        Delete
      </Link>
    </div>
  );
};

export default PostDetail;

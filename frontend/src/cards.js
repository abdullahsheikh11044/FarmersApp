import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getAllPosts() {
      try {
        const posts = await axios.get(
          "http://127.0.0.1:8000/posts/post_api_list/"
        );
        console.log(posts.data);
        setPosts(posts.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPosts();
  }, []);
  return (
    <Grid container spacing={0.5} sx={{ m: 5 }}>
      {posts.map((post, index) => {
        return (
          <Grid item xs={4} key={index}>
            <Card sx={{ maxWidth: 350, boxShadow: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={post.image}
                  alt="no image attached"
                />
                <hr />
                <Typography gutterBottom variant="h5" component="div">
                  Title: {post.title}
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  <Container>{post.body}</Container>
                </Typography>
                {/* <Link to={"/PostShow/" + post.id}>Show</Link> */}
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;

// function BasicExample() {
//   return (

//   );
// }

// export default BasicExample;

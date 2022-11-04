import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import PostShow from "./components/PostShow";

function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   async function getAllPosts() {
  //     try {
  //       const posts = await axios.get("http://127.0.0.1:8000/posts/post_api_list/");
  //       console.log(posts.data);
  //       setPosts(posts.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getAllPosts()
  // }, [])

  return (
    // posts.map((post, i) => {
    //   return(
    //     <h2 key={i}>
    //     {post.title}
    //     <br/>
    //     {post.body}
    //     </h2>
    //   )
    // })
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/PostShow/:id" element={<PostShow />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

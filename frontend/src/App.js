import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowPosts from "./components/ShowPosts";
import PostShow from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/home" element={<ShowPosts />}></Route>
          <Route path="/PostShow/:id" element={<PostShow />}></Route>
          <Route path="/PostUpdate/:id" element={<UpdatePost />}></Route>
          <Route path="/CreatePost" element={<CreatePost />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

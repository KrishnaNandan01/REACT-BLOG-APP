import NavBar from "./heading/heading"
import BlogContextProvider from "./contextApi/blogContextProvider";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Card from "./card/card";
import Footer from "./footer/footer";
import Profile from "./profile/profile";
import MostLiked from "./mostLiked/mostLiked";
import MostComment from "./contextApi/mostComment/mostComment";
import Post from "./post/post";
function App() {
  return (
    <div>
    
      <BrowserRouter>
      <NavBar/>
        <BlogContextProvider>
          <Routes>
            <Route path="/" element={<Card/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/mostliked" element={<MostLiked/>}/>
            <Route path="/mostcomment" element={<MostComment/>}/>
            <Route path="/post" element={<Post/>}/>
          </Routes>
        </BlogContextProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./heading.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar =()=>{
    const [color,setColor] = useState({first:false,second:false,third:false});
    const AuthorHandler = ()=>{
        setColor({...color,first:true,second:false,third:false})
    }
    const MostLikedHandler = ()=>{
        setColor({...color,first:false,second:true,third:false})
    }
    const MostCommentHandler = ()=>{
        setColor({...color,first:false,second:false,third:true});
    }
    return(
        <header>
            <div className="jsom"> <Link to={"/"}><button className="btn" id="jsom">JSOM</button></Link></div>
            <div>
                <Link to={"/"}><button className="btn" style={color.first?{color:"white"}:{color:"rgb(164, 164, 164)"}}  onClick={AuthorHandler} >Authors</button></Link>
                <Link  to={"/mostliked"}><button className="btn" style={color.second?{color:"white"}:{color:"rgb(164, 164, 164)"}} onClick={MostLikedHandler}>MostLikedPost</button></Link>
                <Link  to={"/mostcomment"}><button className="btn" style={color.third?{color:"white"}:{color:"rgb(164, 164, 164)"}} onClick={MostCommentHandler}>MostCommentPost</button></Link>
            </div>
        </header>
    )
}

export default NavBar
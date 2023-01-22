import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { blogContext } from "../contextApi/context";
import "./profile.css";
const arr = [
    {
        data:"Data",
        date:"12/07/2021",
        likes:10

    },
    {
        data:"Invoice",
        date:"12/07/2019",
        likes:5
    },
    {
        data:"Steel Arkansas",
        date:"5/3/2020",
        likes:8
    },
    {
        data:"Connecticut",
        date:"13/7/2021",
        likes:15
    },
    {
        data:"Leaverage Ball Checking Account",
        date:"4/6/2022",
        likes:8
    }
]
const Profile =()=>{
    const [data,setData] = useState([]);
    const [color,setColor] = useState({first:false,second:false,third:false,fourth:false});
    const {profileData} = useContext(blogContext);
    useEffect(()=>{
        setData(arr);
    },[])
    const HandleAscendingByDate = ()=>{
        setColor({first:true,second:false,third:false,fourth:false});
         let newArr=data.slice().sort((a,b)=>{
            let fd = a.date.split("/").map(Number);
            let sd = b.date.split("/").map(Number);
            if(fd[2] !==sd[2]){
                return fd[2]-sd[2]
            }
            else if(fd[2] ===sd[2] && fd[1] !== sd[1]){
                return fd[1]-sd[1];
            }
            else if(fd[2] ===sd[2] && fd[1] === sd[1] && fd[0] !== sd[0] ){
                return fd[0]-sd[0];
            }
        });
        setData(newArr);
    }
    const HandleDescendigByDate = ()=>{
        setColor({first:false,second:true,third:false,fourth:false});
        let newArr=data.slice().sort((a,b)=>{
           let fd = a.date.split("/").map(Number);
           let sd = b.date.split("/").map(Number);
           if(fd[2] !==sd[2]){
               return sd[2]-fd[2]
           }
           else if(fd[2] ===sd[2] && fd[1] !== sd[1]){
               return sd[1]-fd[1];
           }
           else if(fd[2] ===sd[2] && fd[1] === sd[1] && fd[0] !== sd[0] ){
               return sd[0]-fd[0];
           }
       });
       setData(newArr);
   }
   const HandleAscendingByLikes = ()=>{
    setColor({first:false,second:false,third:true,fourth:false});
    let newArr=data.slice().sort((a,b)=>{
       return(a.likes-b.likes);
   });
   setData(newArr);
}
const HandleDescendingByLikes = ()=>{
    setColor({first:false,second:false,third:false,fourth:true});
    let newArr=data.slice().sort((a,b)=>{
       return(b.likes-a.likes);
   });
   setData(newArr);
}
    return(
        <div className="profile-main-div">
            <div className="profile-card-div">
                <div id="profile">
                    <p id="name">{profileData.name}</p>
                    <p className="grey" id="p-size">mobile: {profileData.phone}</p>
                    <p style={{margin:"20px"}} id="p-size">POSTS:65</p>
                    <p style={{margin:"20px"}} id="p-size">LIKES:10</p>
                </div>
            
            </div>
            <div className="post-sort">
                <h1 className="post" >Posts</h1>
                <div className="sort">
                    <button style={color.first?{background:"blue"}:{background:"transparent"}} onClick={HandleAscendingByDate}>Ascendig By Date</button>
                    <button style={color.second?{background:"blue"}:{background:"transparent"}} onClick={HandleDescendigByDate}>Descendig By Date</button>
                    <button style={color.third?{background:"blue"}:{background:"transparent"}} onClick={HandleAscendingByLikes}>Ascendig By Like</button>
                    <button style={color.fourth?{background:"blue"}:{background:"transparent"}} onClick={HandleDescendingByLikes}>Descendig By Like</button>
                </div>
            </div>
            <div className="table-div">
                {data.map((items,i)=>{
                    return(<div key={i} className="element">
                    <div id="data">{items.data}</div>
                    <div>{items.date}</div>
                    <div style={{color:"red"}}>{items.likes}</div>
                </div>)
                })}
                
            </div>
            
        </div>
    )
}
export default Profile;
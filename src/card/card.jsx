
import "./card.css";
import { blogContext } from "../contextApi/context";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Card = ()=>{
    const {apiData,setProfileData} = useContext(blogContext);
    const [data,setData] = useState([]);
    const [count,setCount] = useState(1);
    useEffect(()=>{
        let arr = apiData.filter((element,i)=>{
            return (i<9*count && i>=9*(count-1));
        });
        setData(arr);
    },[apiData,count]);

    const IncHandler = ()=>{
        if(data.length-1){
            setCount(count+1);
        } 
    }
    const DecHandler =()=>{
        if(count>1){
            setCount(count-1);
        }
    }
    const HandleProfile = (e)=>{
        let tempData = JSON.parse(e.target.value);
        setProfileData(tempData);
    }
     
    return(
        <div className="main-div">
            <div className="card-div">
                {data.map((items) => {
                    return (
                        <div key={items.id} className="card">
                            <p>{items.name}</p>
                            <Link className="link" to={"./profile"}><button id="profile-btn" value={JSON.stringify({name:items.name,phone:items.phone})} onClick={HandleProfile}>Click to view Profile</button></Link>
                        </div>
                    )
                })}
            </div>
            <div className="page">
              <button onClick={DecHandler}>Previous</button>
              <div>{count}</div>
              <button onClick={IncHandler}>Next</button>
            </div>
        </div>
    )
}
export default Card; 
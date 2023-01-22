
import { useEffect, useState } from "react";
import { blogContext } from "./context";
import axios from "axios";
const BlogContextProvider = (props)=>{
    const [apiData,setApiData] = useState([]);
    const [profileData,setProfileData] = useState({name:"",phone:""});
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setApiData(res.data);
        })
    },[]);
    return(<blogContext.Provider value={
        {
            apiData,
            profileData,
            setProfileData
        }
    }>
        {props.children}
    </blogContext.Provider>)
};

export default BlogContextProvider;
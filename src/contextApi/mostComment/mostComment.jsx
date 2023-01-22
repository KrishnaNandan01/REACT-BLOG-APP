import { Link } from "react-router-dom";

const arr = [
    {
        data:"Data",
        date:"12/07/2021",
        Comments:10

    },
    {
        data:"Invoice",
        date:"12/07/2019",
        Comments:15
    },
    {
        data:"Steel Arkansas",
        date:"5/3/2020",
        Comments:5
    },
    {
        data:"Connecticut",
        date:"13/7/2021",
        Comments:20
    },
    {
        data:"Leaverage Ball Checking Account",
        date:"4/6/2022",
        Comments:60
    },
    {
        data:"Leaverage Ball Checking Account",
        date:"4/6/2022",
        Comments:60
    },
    {
        data:"Leaverage Ball Checking Account",
        date:"4/6/2022",
        Comments:60
    }

]
const MostComment = ()=>{
    return (<div className="table-div">
        {arr.map((items,i)=>{
            return(
       <Link key={i} className="link-tag" to={"/post"}> <div  className="element ele">
       <div id="data">{items.data}</div>
       <div>{items.date}</div>
       <div style={{color:"red"}}>Comments {items.Comments}</div>
    </div></Link>
         )
        })}
    </div>)
}
export default MostComment;
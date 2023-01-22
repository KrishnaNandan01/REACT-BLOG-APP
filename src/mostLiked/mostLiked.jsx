import { Link } from "react-router-dom"

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
        data:"Invoice",
        date:"12/07/2019",
        likes:5
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
const MostLiked = ()=>{
    return (<div className="table-div">
        {arr.map((items,i)=>{
            return (<Link key={i} className="link-tag" to={"/post"}>
                <div  className="element ele">
                    <div id="data">{items.data}</div>
                    <div>{items.date}</div>
                    <div style={{ color: "red" }}>Likes: {items.likes}</div>
                </div>
            </Link>
            )
        })}

    </div>)
}
export default MostLiked
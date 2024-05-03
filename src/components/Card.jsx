import React from "react"
import cardImage from "../images/katie-zaferes.png"
import statusImage from "../images/soldout.png"
import starImage from "../images/star.png"

function Card() {
    const date = new Date()
    const hour = date.getHours()

    let tod

    if (hour < 12)
        tod = "morning"
    else if (hour < 12 && hour > 17)
        tod - "afternoon"
    else
        tod - "night"

    return (

        <h1>Good {tod}!</h1>

        // <div className="card">
        //     <img src={cardImage} className="card-image" />
        //     <img src={statusImage} className="card-status" />
        //     <div className="card-details">
        //         <img src={starImage} height={14} />
        //         <span>5.0</span>
        //         <span className="gray">(6) - </span>
        //         <span className="gray">USA</span>
        //     </div>
        //     <h2 className="card-details">Life lessons with Katie Zaferes</h2>
        //     <p className="card-details"><b>From $136 </b>/ person</p>
        // </div>
    )
}

export default Card
import React from "react"
import statusImage from "../images/soldout.png"
import starImage from "../images/star.png"

function Card(props) {
    console.log(props)
    return (
        < div className="card" >
            <img src={`/src/images/${props.img}`} className="card-image" />
            <img src={statusImage} className="card-status" />
            <div className="card-details">
                <img src={starImage} height={14} />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) - </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2 className="card-details">{props.title}</h2>
            <p className="card-details"><b>From ${props.price} </b>/ person</p>
        </div >
    )
}

export default Card
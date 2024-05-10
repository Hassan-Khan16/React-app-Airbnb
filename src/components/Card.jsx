import React from "react"
import starImage from "../images/star.png"

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        < div className="card" >
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`/src/images/${props.item.coverImg}`} className="card-image" />
            <div className="card-details">
                <img className="card-star" src={starImage} />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) - </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h2 className="card-title">{props.item.title}</h2>
            <p className="card-price"><b>From ${props.item.price} </b>/ person</p>
        </div >
    )
}

export default Card
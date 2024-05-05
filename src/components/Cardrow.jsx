import React from "react";
import Card from "./Card";

function Cardrow() {
    const numChildren = Math.floor(window.innerWidth / 200); // Assuming each child has a width of 200px

    return (
        <div className="parent-container">
            {[...Array(numChildren)].map((_, index) => (
                <Card key={index} />
            ))}
        </div>
    );
}

export default Cardrow
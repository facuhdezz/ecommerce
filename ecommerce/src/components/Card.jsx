import { useEffect, useState } from "react";

const Card = ({img, description, id}) => {

    return (
        <div id={id}>
            <h1>{description}</h1>
            <img src={img} alt={description} />
        </div>
    )
}

export default Card;
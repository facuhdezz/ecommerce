const Card = ({ img, description, id }) => {

    return (
        <div id={id}>
            <img src={img} alt={description} />
        </div>
    )
}

export default Card;
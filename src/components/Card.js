import "../css/card.css"

const Card = (props) => {
    return (
        <div className="d-block card" style={{ width: '20rem' }}>
           
           <img className="card-img-top" src={props.img} alt={props.img} />
            <div className="card-body">
                <h5 className="card-title">{props.head}</h5>
                <p className="card-text">{props.content}</p>
               
            </div>
        </div>

    )
}

export default Card;

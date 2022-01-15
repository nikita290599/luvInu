import "../css/content.css"
const ContentRight=(props)=>{
    return (
        <div className="d-flex ">
        
        <div id={props.idd} className="content-cards" style={{width:"50%",padding:"5%"}}>
            <img class="content-image" src={props.img} width="100rem" alt={props.num}/>
        </div>
        <div   style={{width:"50%",paddingLeft:"50px"}}>
        <div  style={{color:"red",marginLeft:0,paddingLeft:0 }}>
            <span className="fonty">0{props.num}</span>
        </div>
          <div className="blue">{props.blue}</div>
          <div className="green">{props.green}</div>
          <div className="norm">{props.norm}</div>
        </div>
        </div>
    )
}

export default ContentRight;
import "../css/content.css"
import phone1 from "../images/ar_app.png"
import phone2 from "../images/meme.png"
const Banner=()=>{
    return(
        <div id="ban" class="banner-two d-flex">
            <div className="b-left d-flex">
            <img className="phone1" src={phone2}></img>
            <img className="phone2" src={phone1}></img>
            </div>
            <div className="b-right"><h4>
            DON’T MISS OUR APPS</h4>
<h1>Mobile Application for Our Community.</h1>
<h4>Gamification with liquidity Mining</h4><br></br><br></br>
<h5>It will help in better engagement and gives an extra edge in the space.</h5>
<h5>Will be launched in KiaOs for targeting African nation like Nigeria etc.</h5>

           
            
            </div>
        </div>
    )
}

export default Banner;
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import Card from './Card';
import Banner from './Banner';
import banner from '../images/banner.png';
import one from "../images/for_the_love.png";
import two from "../images/community_anthem.png";
import three from "../images/inu art.jpg";
import four from "../images/store.jpg"
import five from "../images/documentary.jpg"
import "../css/body.css"
import I from "../images/15.png"
import II from "../images/10.png"
import III from "../images/45.png"
import IV from "../images/15 2.png"
import V from "../images/15 3.png"
const Body = () => {
    return (
        <div className="container mt-10">
            <div className='head'>
                <h1 className='heading-main'>Compassion based Decentralized Meme Token</h1>
                <div className='heading-small'>
                    With as much love, respect, and compassion
                    as humanly possible.
                </div>
                <div className='bt'>
                    <button className='btn btn-lg btn-warning'>Connect with us</button>
                    <button className='btn btn-lg btn-info'>Buy on pancake swap</button>
                </div>

            </div>
            <div className="banner"><img src={banner}></img></div>
            <iframe className='mt-15' width="100%" height="400px" src="https://www.youtube.com/embed/HiePOUlAZXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='mt-10 text-center'>
                <div style={{ color: "#283249", fontSize: "3rem", fontWeight: "600" }}>We do we have in our</div> <div style={{ color: "#01daba", fontSize: "3rem", fontWeight: "600" }}>Future Store</div>

            </div>
            <br></br><br></br>
            <ContentLeft idd="a" num="1" blue="For the" green="Love of Dogs" norm="15% of supply of tokens will be reserved for the dog care and feed activities." img={one}></ContentLeft>
            <ContentRight
            idd="b"
                num="2"
                blue="Community Anthem"
                green="Dog Love"
                norm="We will be releasing the community anthem for LuvInu in 10 different languages
Community will create content using our music in background which will amplify our message around LuvInu"
                img={two}>

            </ContentRight>
            <ContentLeft
            idd="c"
                num="3"
                blue="Community Anthem"
                green="Dog Love"
                norm="We will be releasing the community anthem for LuvInu in 10 different languages
Community will create content using our music in background which will amplify our message around LuvInu"
                img={three}>

            </ContentLeft>
            <ContentRight
            idd="d"
                num="4"
                blue="Community Anthem"
                green="Dog Love"
                norm="We will launch a NFT marketplace where artists can sell their art.
Dog lovers will be invited to host their art on the platform"
                img={four}>

            </ContentRight>
            <ContentLeft
            idd="e"
                num="5"
                blue="Community Anthem"
                green="Dog Love"
                norm="We will be releasing the community anthem for LuvInu in 10 different languages
Community will create content using our music in background which will amplify our message around LuvInu"
                img={five}>

            </ContentLeft>
            
                <Banner/>
        
                
           

            {/* CAROUSAL START */}
            <div id="toko" className="slides d-flex">
                <div className="slide-left"><div className="blue">LuvInu</div><div className="green"> Tokonomics</div></div>
                <div className="slide-right">
                    <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                        {/*Controls*/}
                        {/* <div className="controls-top" style={{color:"#01DABA"}}>
                            <a style={{color:"#01DABA"}} className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left" /></a>
                            <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right" /></a>
                        </div> */}
                        {/*/.Controls*/}
                        {/*Indicators*/}
                        <ol className="carousel-indicators" >
                            <li style={{backgroundColor:"#01DABA"}} data-target="#multi-item-example" data-slide-to={0} className="active" />
                            <li style={{backgroundColor:"#01DABA"}} data-target="#multi-item-example" data-slide-to={1} />
                            <li style={{backgroundColor:"#01DABA"}}  data-target="#multi-item-example" data-slide-to={2} />
                        </ol>
                        {/*/.Indicators*/}
                        {/*Slides*/}
                        <div className="carousel-inner" role="listbox">
                            {/*First slide*/}
                            <div className="carousel-item active">


                                <div className="col-md-6" style={{ float: 'left' }}>
                                    <Card img={I}
                                        head="Dog Care"
                                        content="15% of supply of tokens will be reserved for the dog care and feed activities."

                                    />
                                </div>
                                <div className="col-md-6" style={{ float: 'left' }}>
                                    <Card img={II}
                                        head="Team"
                                        content="10% of supply of tokens will be reserved for the LuvInu Team to support further
										development."

                                    />
                                </div>
                            </div>
                            {/*/.First slide*/}
                            {/*Second slide*/}
                            <div className="carousel-item">
                                <div className="col-md-6" style={{ float: 'left' }}>
                                    <Card img={III}
                                        head="Liquidity on exchanges"
                                        content="45% of the token supply would be used to provide liquidity on the exchanges."

                                    />
                                </div>
                                <div className="col-md-6" style={{ float: 'left' }}>

                                    <Card img={IV}
                                        head="Investors and Advisors"
                                        content="15% of the supply of token would be awarded to investors and advisors"

                                    />
                                </div>


                            </div>

                            {/*/.Second slide*/}
                            <div className="carousel-item">
                                <div className="col-md-6" style={{ float: 'left' }}>


                                    <Card img={V}
                                        head="Community Engagement"
                                        content="15% of the supply of token will be used for community engagement activities"

                                    />
                                </div>



                            </div>
                        </div>
                        {/*/.Slides*/}
                    </div>


                </div>

            </div>





        </div>
    );
}

export default Body;
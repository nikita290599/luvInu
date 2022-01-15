
import logo from '../images/logo.png'
import pancake from '../images/pancake.png'
import "../css/Navbar.css"

const Navbar = () => {
 

    return (
        <nav id="navbar_top" className="container-fluid navbar navbar-expand-lg navbar-light bg-light pt-5 d-flex">
            
            <div className='w-25' style={{paddingLeft:"13vw"}}><img className="navbar-brand float-left" src={logo} alt="logo"/></div>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div style={{paddingLeft:"11vw"}} className="collapse navbar-collapse w-75" id="navbarSupportedContent">
                <ul className="navbar-nav w-100">
                    <li className="nav-item active">
                        <a className="nav-link" href="#a">Features  <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#ban">Apps</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link " href="#toko">Tokonomics</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link  " style={{width:"15rem"}} href="https://pancakeswap.finance/info/token/0x792495530619b5433f0b136283fb90e6643dfb39" target="_blank" rel="noreferrer">Buy on Pancake Swap<img className='ml-1' width="25rem" src={pancake} alt="pancake logo"></img></a>
                    </li>
                    <li className="nav-item mr-0">
                        <button className='btn bt-twitter'>CONNECT <span class="fab fa-twitter tw"></span></button>
                    </li>
                </ul>
                
            </div>
        </nav>

    );
}

export default Navbar;
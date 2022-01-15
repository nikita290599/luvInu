import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';
import $ from "jquery";



function App() {
 
  $(".phone1").focus(function () {
    $(this).animate({left: "0px"}, 1000);
}); 
  return (
    
    <div className="App">
     <Navbar/>
     <Body/>
     <footer>
       <div className='d-flex' style={{color:"lightgrey" ,margin:"10vw 10vw 1vw 10vw"}}><div style={{width:"80vw"}}>© 2021 <a href="https://luvinu.io/">LuvInu</a> All Right Reserved</div>  <div style={{color:"#1DA1F2", fontSize:"2vw", width:"10%"}}><a class="fab fa-twitter " href="https://twitter.com/LuvInuCoin"></a></div></div>
     </footer>
    </div>
    
  );
}

export default App;

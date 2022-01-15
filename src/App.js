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
    </div>
    
  );
}

export default App;

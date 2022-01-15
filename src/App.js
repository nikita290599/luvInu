import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';
import $ from "jquery";



function App() {
  $("#ban").mouseover(function(){
    $(".phone1").animate({transform: 'translateY(100px) rotate(1rad) scaleX(2) skewY(42deg)'});
   
  });
  return (
    
    <div className="App">
     <Navbar/>
     <Body/>
    </div>
    
  );
}

export default App;

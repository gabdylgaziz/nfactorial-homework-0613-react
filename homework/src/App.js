import "./App.css";
import arctic from "./img/1.jpeg"
import water from "./img/2.jpg"
import mountain from "./img/3.jpeg"
import fox from "./img/4.jpeg"
import cloudes from "./img/5.jpeg"


function App() {
	return (
    <div className="blocks">
        <div className="block">
          <img src = {arctic}></img>
          <p>HEY</p>
        </div>
        <div className="block">
          <img src = {water}></img>
          <p>LET'S</p>
        </div>
        <div className="block">
          <img src = {mountain}></img>
          <p>GIVE</p>
        </div>
        <div className="block">
          <img src = {fox}></img>
          <p>ALL</p>
        </div>
        <div className="block">
          <img src = {cloudes}></img>
          <p>YOU CAN</p>
        </div>
    </div>
	);
}

export default App;
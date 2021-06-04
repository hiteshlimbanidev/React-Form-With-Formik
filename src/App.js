import "./App.css";
import rocket from "../src/asset/rocket.png";
import { Signup } from "./component/signup";

function App() {
  return (
    <div className="container md-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src={rocket} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

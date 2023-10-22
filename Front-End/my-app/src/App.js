import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import Progress from "./Progress.js";
// import PolicyType from "./PolicyType.js";
import Buttons from "./Buttons.js";
// import Name from "./Name.js";

function App() {
  return (
    <div>
      <Header />
      <Progress />
      {/* <Name /> */}
      {/* <PolicyType /> */}
      <div className="container" style={{ width: "40%" }}>
        <div className="card text-bg-light mt-4 text-center">
          <div className="card-body">
            <h5 className="card-title text-center">
              What is your Date of Birth?
            </h5>
            <input
              type="date"
              className="form-control form-control-lg mt-1 text-center"
              id="First Name"
              placeholder="Enter First Name"
              aria-describedby="First Name"
              style={{ maxWidth: "30%" }}
            ></input>
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
}

export default App;

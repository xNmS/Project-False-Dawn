import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import Progress from "./Progress.js";
import Name from "./Name.js";

function App() {
  return (
    <div>
      <Header />
      <Progress />
      <Name />
      <div className="container" style={{ width: "40%" }}>
        <div className="card text-bg-light mt-4">
          <div className="card-body">
            <h5 className="card-title text-center">
              Who do you want to cover?
            </h5>
            <div
              className="btn-group btn-group-lg"
              role="group"
              aria-label="Title Options"
            >
              <input
                type="radio"
                className="btn-check"
                name="Title"
                id="Mr"
                autocomplete="off"
                check
              />
              <label className="btn btn-outline-primary m-2" for="Mr">
                Mr
              </label>
              <input
                type="radio"
                className="btn-check"
                name="Title"
                id="Mrs"
                autocomplete="off"
              />
              <label className="btn btn-outline-primary m-2" for="Mrs">
                Mrs
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

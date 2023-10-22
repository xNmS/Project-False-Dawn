import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import Progress from "./Progress.js";
// import Name from "./Name.js";
// import PolicyType from "./PolicyType.js";
// import DateOfBirth from "./DateOfBirth.js";
// import Smoker from "./Smoker.js";
import Buttons from "./Buttons.js";

function App() {
  return (
    <div>
      <Header />
      <Progress />
      {/* <Name /> */}
      {/* <PolicyType /> */}
      {/* <DateOfBirth /> */}
      {/* <Smoker /> */}
      <Buttons />
    </div>
  );
}

export default App;

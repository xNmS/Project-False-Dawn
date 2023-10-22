import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import Progress from "./Progress.js";
// import Name from "./Name.js";
// import DateOfBirth from "./DateOfBirth.js";
// import Smoker from "./Smoker.js";
// import PolicyType from "./PolicyType.js";
// import CoverType from "./CoverType.js";
// import Duration from "./Duration.js";
import Buttons from "./Buttons.js";

function App() {
  return (
    <div>
      <Header />
      <Progress />
      {/* <Name /> */}
      {/* <DateOfBirth /> */}
      {/* <Smoker /> */}
      {/* <PolicyType /> */}
      {/* <CoverType /> */}
      {/* <Duration /> */}
      <Buttons />
    </div>
  );
}

export default App;

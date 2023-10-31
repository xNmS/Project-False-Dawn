import { useLocation } from "react-router-dom";
import order from "./Order.js";

function Progress() {
  const location = useLocation();
  const currQuestion = order.indexOf(location.pathname);
  const noQuestions = order.length;
  const progress = (currQuestion / noQuestions) * 100;

  return (
    <div className="progress-bar-section">
      <div className="container" style={{ width: "40%" }}>
        <div className="text-center">Your Progress</div>
        <div className="progress mt-2" style={{ height: "20px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-label="Progress Bar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Progress;

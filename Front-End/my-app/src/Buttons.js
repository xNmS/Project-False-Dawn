import { Link, useLocation } from "react-router-dom";
import order from "./Order.js";

function Buttons() {
  const location = useLocation();
  const currentIndex = order.indexOf(location.pathname);

  const backButton =
    currentIndex > 0 ? (
      <Link to={order[currentIndex - 1]}>
        <button className="btn btn-secondary">Back</button>
      </Link>
    ) : (
      <Link to={order[currentIndex]}>
        <button className="btn btn-secondary">Back</button>
      </Link>
    );

  const nextButton =
    currentIndex < order.length - 1 ? (
      <Link to={order[currentIndex + 1]}>
        <button className="btn btn-success">Next</button>
      </Link>
    ) : null;
  return (
    <div className="container mt-3" style={{ width: "40%" }}>
      <div className="d-flex justify-content-between">
        {backButton}
        {nextButton}
      </div>
    </div>
  );
}

export default Buttons;

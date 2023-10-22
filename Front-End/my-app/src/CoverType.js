import decreasing from "./assets/house.png";
import levelterm from "./assets/family.png";

function CoverType() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4 text-center">
        <div className="card-body">
          <h5 className="card-title text-center">
            What type of coverage would you like?
          </h5>
          <div
            className="btn-group-vertical btn-group-lg"
            role="group"
            aria-label="Coverage Options"
          >
            <div className="container-fluid">
              <input
                type="radio"
                className="btn-check"
                name="Coverage Options"
                id="Level Term"
                autocomplete="off"
                check
              />
              <label
                className="btn btn-outline-primary m-2 btn-lg"
                for="Level Term"
              >
                <div className="container" style={{ display: "flex" }}>
                  <img
                    src={levelterm}
                    alt="Level Term"
                    className="icon"
                    height="100"
                  />
                  <div>
                    <p>Level Term</p>
                    <p>
                      <small>
                        Level Term policies pay a fixed amount regardless of
                        when you claim
                      </small>
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div className="container-fluid">
              <input
                type="radio"
                className="btn-check"
                name="Coverage Options"
                id="Decreasing"
                autocomplete="off"
                check
              />
              <label
                className="btn btn-outline-primary m-2 btn-lg"
                for="Decreasing"
              >
                <div className="container" style={{ display: "flex" }}>
                  <img
                    src={decreasing}
                    alt="Decreasing"
                    className="icon"
                    height="100"
                  />
                  <div>
                    <p>Decreasing</p>
                    <p>
                      <small>
                        Decreasing policies reduce the amount you could receive
                        over time. This is usually taken out to cover a
                        repayment mortgage.
                      </small>
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoverType;

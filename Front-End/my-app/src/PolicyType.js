import joint_policy from "./assets/friend.png";
import man from "./assets/man.png";
import woman from "./assets/woman.png";
const gender = "M";

function PolicyType() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4 text-center">
        <div className="card-body">
          <h5 className="card-title text-center">Who do you want to cover?</h5>
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Title Options"
          >
            <input
              type="radio"
              className="btn-check"
              name="Title"
              id="Just Me"
              autocomplete="off"
              check
            />
            <label className="btn btn-outline-primary m-2" for="Just Me">
              <div className="container center-content">
                <img
                  src={gender === "M" ? man : woman}
                  alt="Joint Policy"
                  className="icon"
                  height="100"
                />
                Just Me
              </div>
            </label>
            <input
              type="radio"
              className="btn-check"
              name="Title"
              id="Another Person"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary m-2" for="Another Person">
              <div className="container center-content">
                <img
                  src={joint_policy}
                  alt="Joint Policy"
                  className="icon"
                  height="100"
                />
                Myself & Another Person
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyType;

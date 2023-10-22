function Smoker() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4 text-center">
        <div className="card-body">
          <h5 className="card-title text-center">Are you a smoker?</h5>
          <div>
            <p>
              A smoker is anyone who has used any tobacco-related products in
              the last 12 months including cigarettes, cigars, a pipe, nicotine
              replacements and e-cigarettes.
            </p>
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
                <div className="container center-content">No</div>
              </label>
              <input
                type="radio"
                className="btn-check"
                name="Title"
                id="Another Person"
                autocomplete="off"
              />
              <label
                className="btn btn-outline-primary m-2"
                for="Another Person"
              >
                <div className="container center-content">Yes</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Smoker;

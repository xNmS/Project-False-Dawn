function Duration() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4 text-center">
        <div className="card-body text-center">
          <h5 className="card-title">
            How many years would you like your policy to last?
          </h5>
          <div className="container center-content">
            <input
              type="number"
              class="form-control form-control-lg mt-1"
              id="Duration"
              placeholder="e.g. 25 years"
              aria-describedby="Policy Duration"
              style={{ maxWidth: "25%", textAlign: "center" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Duration;

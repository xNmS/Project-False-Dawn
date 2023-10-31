function DateOfBirth() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4 text-center">
        <div className="card-body">
          <h5 className="card-title text-center">
            What is your Date of Birth?
          </h5>
          <input
            type="date"
            className="form-control form-control-lg mt-1 text-center mx-auto"
            id="First Name"
            placeholder="Enter First Name"
            aria-describedby="First Name"
            style={{ maxWidth: "40%" }}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default DateOfBirth;

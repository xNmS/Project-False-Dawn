function Address() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4">
        <div className="card-body">
          <h5 className="card-title text-center">Where do you live?</h5>
          <h6 className="card-subtitle mt-1">Postcode</h6>
          <input
            type="text"
            class="form-control form-control-lg mt-1"
            id="Postcode"
            placeholder="Enter Postcode"
            aria-describedby="Postcode"
            style={{ maxWidth: "45%" }}
          ></input>
          <h6 className="card-subtitle mt-1">Select Address</h6>
          <select
            type="text"
            class="form-select form-select-lg mt-1"
            id="Address"
            placeholder="Select Address"
            aria-describedby="Address"
            style={{ maxWidth: "45%" }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Address;

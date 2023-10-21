function Name() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4">
        <div className="card-body">
          <h5 className="card-title text-center">What Is Your Name?</h5>
          <h6 className="card-subtitle mt-1">Title</h6>
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Title Options"
          >
            <input
              type="radio"
              className="btn-check"
              name="Title"
              id="Mr"
              autocomplete="off"
              check
            />
            <label className="btn btn-outline-primary m-2" for="Mr">
              Mr
            </label>
            <input
              type="radio"
              className="btn-check"
              name="Title"
              id="Mrs"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary m-2" for="Mrs">
              Mrs
            </label>
            <input
              type="radio"
              className="btn-check"
              name="Title"
              id="Ms"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary m-2" for="Ms">
              Ms
            </label>
            <input
              type="radio"
              className="btn-check"
              name="Title"
              id="Miss"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary m-2" for="Miss">
              Miss
            </label>
          </div>
          <h6 className="card-subtitle mt-1">First Name</h6>
          <input
            type="text"
            class="form-control form-control-lg mt-1"
            id="First Name"
            placeholder="Enter First Name"
            aria-describedby="First Name"
            style={{ "max-width": "45%" }}
          ></input>
          <h6 className="card-subtitle mt-1">Surname</h6>
          <input
            type="text"
            class="form-control form-control-lg mt-1"
            id="SurName"
            placeholder="Enter Surname"
            aria-describedby="Surname"
            style={{ "max-width": "45%" }}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Name;

function Summary() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4 text-center">
        <div className="card-body text-center">
          <h5 className="card-title">Summary</h5>
          Please see a summary of your details below. Please make sure
          everything is correct before proceeding.
          <div className="container center-content">
            <table
              class="table table-hover table-light"
              style={{
                maxWidth: "80%",
                textAlign: "left",
              }}
            >
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>Mr John Doe</td>
                </tr>
                <tr>
                  <th scope="row">Date of Birth</th>
                  <td>29/02/1972</td>
                </tr>
                <tr>
                  <th scope="row">Tobacco Usage in the last 12 months</th>
                  <td>No</td>
                </tr>
                <tr>
                  <th scope="row">Coverage</th>
                  <td>Just me</td>
                </tr>
                <tr>
                  <th scope="row">Type of Cover</th>
                  <td>Level</td>
                </tr>
                <tr>
                  <th scope="row">Policy Term</th>
                  <td>25 years</td>
                </tr>
                <tr>
                  <th scope="row">Cover Amount</th>
                  <td>£1,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Summary;

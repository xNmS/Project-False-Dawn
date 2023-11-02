import CurrencyInput from "react-currency-input-field";

function Amount() {
  return (
    <div className="container" style={{ width: "40%" }}>
      <div className="card text-bg-light mt-4 text-center">
        <div className="card-body text-center">
          <h5 className="card-title">How much cover would you like?</h5>
          <div className="container center-content">
            <CurrencyInput
              className="form-control form-control-lg mt-1"
              id="input-example"
              name="input-name"
              placeholder="Please enter a number"
              prefix="£"
              decimalsLimit={0}
              onValueChange={(value, name) => console.log(value, name)}
              aria-describedby="Cover Amount"
              style={{
                maxWidth: "50%",
                textAlign: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Amount;

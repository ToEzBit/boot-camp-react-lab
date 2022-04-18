import { useState } from "react";
import "./style.css";
const Lab5 = () => {
  const [input, setInput] = useState();
  const [status, setStatus] = useState();
  const [styleBorder, setStyleBorder] = useState("border-default");
  const [styleColor, setStyleColor] = useState("color-default");

  const validate = () => {
    let phoneNum = input; //TODO: input form

    if (!phoneNum) {
      setStatus("Phone Number is required");
      setStyleBorder("border-error");
      setStyleColor("color-error");
    } else if (isNaN(phoneNum)) {
      setStatus("Phone Number is invalid");
      setStyleBorder("border-error");
      setStyleColor("color-error");
    } else if (phoneNum.length < 10) {
      setStatus("invalid length");
      setStyleBorder("border-error");
      setStyleColor("color-error");
    } else {
      setStatus("Your number is valid");
      setStyleBorder("border-success");
      setStyleColor("color-success");
    }
  };
  return (
    <div>
      <input
        placeholder="Phone Number"
        onChange={(e) => setInput(e.target.value)}
        className={styleBorder}
      ></input>
      <button onClick={validate}>check</button>
      <p className={styleColor}>{status}</p>
    </div>
  );
};

export default Lab5;

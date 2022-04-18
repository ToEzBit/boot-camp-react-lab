import { logDOM } from "@testing-library/react";
import { useState } from "react";

const Lab4 = () => {
  const [bath, setBath] = useState(0);

  const convertDollar = (e) => {
    // console.log(e.target.value);
    let dollar = e.target.value;
    setBath(dollar * 30);
  };
  return (
    <div>
      <div>
        <label>Enter Dollar :</label>
        <input
          placeholder="Enter number"
          onChange={(e) => convertDollar(e)}
        ></input>
      </div>
      <div>
        <p>
          Convert to Bath <span>{bath}</span>
        </p>
      </div>
    </div>
  );
};

export default Lab4;

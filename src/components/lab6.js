import { useState } from "react";

const Lab6 = () => {
  const [disArr, setDisArr] = useState(["Bkk Dis1", "Bkk Dis2", "Bkk Dis3"]);

  const updateDis = (e) => {
    if (e === "non") {
      setDisArr(["Non Dis1", "Non Dis2", "Non Dis3"]);
    } else if (e === "pth") {
      setDisArr(["Pathum Dis1", "Pathum Dis1", "Pathum Dis1"]);
    } else {
      setDisArr(["Bkk Dis1", "Bkk Dis2", "Bkk Dis3"]);
    }
  };

  return (
    <div>
      <div>
        <label>Province :</label>
        <select onChange={(e) => updateDis(e.target.value)}>
          <option value="bkk">Bangkok</option>
          <option value="non">Nontaburi</option>
          <option value="pth">Pathum</option>
        </select>
      </div>
      <div>
        <label>District :</label>
        <select>
          {disArr.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Lab6;

// onChange={(e) => {
//     setProvince(e.target.value);
//     if (e.target.value === "non") {
//       setDisArr(newArr);
//     }
//   }}

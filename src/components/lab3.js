import { useState } from "react";

const Lab3 = () => {
  const [displayText, setDisplayText] = useState("block");
  const [textButton, setTextButton] = useState("HIDE");

  const changeTextAndBtn = () => {
    if (displayText === "block") {
      setDisplayText("none");
      setTextButton("SHOW");
    } else {
      setDisplayText("block");
      setTextButton("HIDE");
    }
  };
  return (
    <div>
      <button onClick={changeTextAndBtn}>{textButton}</button>
      <p style={{ display: displayText }}>lorem lorem lorem lorem lorem</p>
    </div>
  );
};

export default Lab3;

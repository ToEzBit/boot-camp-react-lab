import { useState } from "react";

const Lab2 = () => {
  const [displayText, setDisplayText] = useState("block");
  return (
    <div>
      <button onClick={() => setDisplayText("none")}>Click to hide text</button>
      <h1 style={{ margin: "0 auto", display: displayText }}>text</h1>
    </div>
  );
};

export default Lab2;

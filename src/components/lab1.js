import { useState } from "react";

const Lab1 = () => {
  const [displayBtn, setDisplayBtn] = useState("block");
  return (
    <div>
      <button
        style={{ display: displayBtn, margin: "0 auto" }}
        onClick={() => setDisplayBtn("none")}
      >
        Click to hide me
      </button>
    </div>
  );
};

export default Lab1;

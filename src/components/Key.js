import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
  const selectKey = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectKey}>
      {keyVal}
    </div>
  );
}

export default Key;

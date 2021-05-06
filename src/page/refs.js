import React, { useRef } from "react";
import MyButton from "../components/MyButton"

export default function Refs(params) {
  const buttonRef = useRef(null);
  const getRef = () => {
    console.log("buttonref", buttonRef.current.value)
  }

  return (
    <div>
      <MyButton ref={buttonRef} onClick={getRef} />
    </div>
  );
}

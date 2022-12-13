import React, { useRef, useState } from "react";
import Portal from "../components/Portal";

const PortalView = () => {
  const customTarget = useRef();
  const [target, setTarget] = useState(document.body);
  const [targetText, setTargetText] = useState("Body");

  return (
    <div>
      <div ref={customTarget}></div>
      <div>Portal</div>
      <button
        onClick={() => {
          if (targetText === "Body") {
            setTargetText("Custom Target");
            setTarget(customTarget.current);
          } else {
            setTarget(document.body);
            setTargetText("Body");
          }
        }}
      >
        Target Değiştir
      </button>
      <Portal text={targetText} target={target} />
    </div>
  );
};

export default PortalView;

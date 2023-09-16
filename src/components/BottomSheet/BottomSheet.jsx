import React, { useRef, useState } from "react";
import "./BottomSheet.css";

const BottomSheet = () => {
  const [sheetState, setSheetState] = useState("fullyOpen");
  const sheetRef = useRef(null);
  const startY = useRef(null);
  const isDragging = useRef(false);

  const snapPoints = {
    closed: 10, // Height when closed
    halfOpen: 50, // Height when half-open
    fullyOpen: 100, // Height when fully open
  };

  const toggleSheet = () => {
    if (sheetState === "closed") {
      setSheetState("halfOpen");
    } else if (sheetState === "halfOpen") {
      setSheetState("fullyOpen");
    } else {
      setSheetState("closed");
    }
  };

  return (
    <div
      ref={sheetRef}
      className={`bottom-sheet ${sheetState}`}
      style={{ height: `${snapPoints[sheetState]}vh` }}
    >
      <div onClick={toggleSheet} className="bottom-sheet-handle">
        {(sheetState === "closed" || sheetState === "halfOpen") && (
          <span>&#x25B2;</span>
        )}
        {sheetState === "fullyOpen" && <span>&#x25BC;</span>}
      </div>
    </div>
  );
};

export default BottomSheet;

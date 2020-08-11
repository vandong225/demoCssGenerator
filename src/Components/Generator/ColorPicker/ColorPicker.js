import React from "react";
import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = (props) => {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: `rgba( ${props.color.rgb.r},${props.color.rgb.g},${props.color.rgb.b})`,
          height: "30px",
          width: "10%",
          border: "4px solid #cacfd6",
          position: "relative",
          margin: "10px",
        }}
        onClick={() => setHidden(!hidden)}
      ></div>
      {hidden && (
        <SketchPicker
          color={props.color.rgb}
          onChange={props.onChangeColorShadow}
        />
      )}
    </>
  );
};

export default ColorPicker;

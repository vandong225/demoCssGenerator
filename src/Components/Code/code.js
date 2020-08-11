import React from "react";
import { Card } from "@shopify/polaris";

const Code = (props) => {
  const css = props.list
    .map((x) => {
      return `rgba(${x.shadowColor.rgb.r},${x.shadowColor.rgb.g},${
        x.shadowColor.rgb.b
      },${x.shadowColor.opacity / 100}) ${x.shadowColor.shiftRight}px ${
        x.shadowColor.shiftDown
      }px ${x.shadowColor.blur}px`;
    })
    .join(", ");
  return (
    <Card title="Css Code" sectioned>
      <p style={{ fontSize: "11px" }}>text-shadow: {css}</p>
    </Card>
  );
};

export default Code;

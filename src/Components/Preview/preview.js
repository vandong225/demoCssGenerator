import React from "react";
import { Card } from "@shopify/polaris";
import "./preview.css";
const Preview = (props) => {
  const styleText = props.list
    .map((x) => {
      return `rgba(${x.shadowColor.rgb.r},${x.shadowColor.rgb.g},${
        x.shadowColor.rgb.b
      },${x.shadowColor.opacity / 100}) ${x.shadowColor.shiftRight}px ${
        x.shadowColor.shiftDown
      }px ${x.shadowColor.blur}px`;
    })
    .join(", ");
  return (
    <Card title="Preview" sectioned>
      <Card.Section>
        <div className="preview">
          <p style={{ textShadow: styleText }}>Hello SC</p>
        </div>
      </Card.Section>
    </Card>
  );
};

export default Preview;

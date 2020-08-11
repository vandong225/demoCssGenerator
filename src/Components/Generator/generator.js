import React from "react";
import { Card, RangeSlider, Button, FormLayout } from "@shopify/polaris";
import ListLayer from "./ListLayer/ListLayer";
import ColorPicker from "./ColorPicker/ColorPicker";

const Generator = (props) => {
  console.log(props);
  return (
    <Card title="Generator" sectioned>
      <Card.Section>
        <FormLayout>
          <RangeSlider
            id="shiftRight"
            label="Shift right"
            value={props.list[props.layoutSelected].shadowColor.shiftRight}
            min={-50}
            max={50}
            onChange={props.onChangeSlider}
            output
          />
          <RangeSlider
            id="shiftDown"
            label="Shift down"
            value={props.list[props.layoutSelected].shadowColor.shiftDown}
            min={-50}
            max={50}
            onChange={props.onChangeSlider}
            output
          />
          <RangeSlider
            id="blur"
            label="Blur"
            value={props.list[props.layoutSelected].shadowColor.blur}
            min={0}
            max={100}
            onChange={props.onChangeSlider}
            output
          />
          <RangeSlider
            id="opacity"
            label="Opacity"
            value={props.list[props.layoutSelected].shadowColor.opacity}
            min={0}
            max={100}
            onChange={props.onChangeSlider}
            output
          />
          <ColorPicker
            color={props.list[props.layoutSelected].shadowColor}
            onChangeColorShadow={props.onChangeColorShadow}
          />
        </FormLayout>
      </Card.Section>
      <Card.Section>
        <Button onClick={props.onAddLayer}>Add Layer</Button>
        <ListLayer
          layoutSelected={props.layoutSelected}
          list={props.list}
          onSwapSelect={props.onSwapSelect}
          onChangeLayout={props.onChangeLayout}
        />
      </Card.Section>
    </Card>
  );
};

export default Generator;

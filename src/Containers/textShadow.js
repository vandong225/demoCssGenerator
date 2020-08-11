import React from "react";
import { Layout } from "@shopify/polaris";
import Generator from "../Components/Generator/generator";
import Preview from "../Components/Preview/preview";
import Code from "../Components/Code/code";
import Template from "../Components/Template/template";
import { connect } from "react-redux";
import {
  changeSlider,
  addLayer,
  swapSelect,
  changeLayout,
  changeColor,
} from "../Action/TextShadow";

const TextShadow = (props) => {
  const { textShadow } = props;

  return (
    <Layout>
      <Layout.Section oneHalf>
        <Generator
          onChangeSlider={props.onChangeSlider}
          list={textShadow.list}
          layoutSelected={textShadow.layoutSelected}
          onAddLayer={props.onAddLayer}
          onSwapSelect={props.onSwapSelect}
          onChangeLayout={props.onChangeLayout}
          onChangeColorShadow={props.onChangeColorShadow}
        />
      </Layout.Section>
      <Layout.Section oneHalf>
        <Preview list={textShadow.list} />
        <Code list={textShadow.list} />
        <Template />
      </Layout.Section>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    textShadow: state.textShadow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSlider: (value, id) => {
      dispatch(changeSlider(value, id));
    },
    onAddLayer: () => {
      dispatch(addLayer());
    },
    onSwapSelect: (arr, id) => {
      dispatch(swapSelect(arr, id));
    },
    onChangeLayout: (id) => {
      dispatch(changeLayout(id));
    },
    onChangeColorShadow: (color) => {
      dispatch(changeColor(color));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextShadow);

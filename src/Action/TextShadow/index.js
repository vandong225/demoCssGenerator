import * as types from "../../Contanst";

export const changeSlider = (value, id) => {
  return {
    type: types.CHANGE_SLIDER,
    payload: { value, id },
  };
};

export const addLayer = () => {
  return {
    type: types.ADD_LAYER,
    payload: {
      item: {
        shadowColor: {
          rgb: {
            r: 0,
            g: 0,
            b: 0,
          },
          shiftRight: 0,
          shiftDown: 0,
          blur: 5,
          opacity: 20,
        },
      },
    },
  };
};

export const swapSelect = (arr, id) => {
  return {
    type: types.SWAP_SELECT,
    payload: {
      arr,
      id,
    },
  };
};

export const changeLayout = (id) => {
  return {
    type: types.CHANGE_LAYOUT,
    payload: {
      id,
    },
  };
};

export const changeColor = (color) => {
  return {
    type: types.CHANGE_COLOR_SHADOW,
    payload: {
      color,
    },
  };
};

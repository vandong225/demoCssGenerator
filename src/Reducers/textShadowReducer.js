import * as types from "../Contanst";

const initialState = {
  list: [
    {
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
  ],
  layoutSelected: 0,
};

const TextShadowReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case types.CHANGE_SLIDER:
      const { value, id } = action.payload;
      newState.list[state.layoutSelected].shadowColor[id] = value;

      return newState;
    case types.ADD_LAYER:
      newState.list.push(action.payload.item);

      return newState;
    case types.SWAP_SELECT:
      newState.layoutSelected = action.payload.id;
      newState.list = [...action.payload.arr];
      return newState;
    case types.CHANGE_LAYOUT:
      newState.layoutSelected = action.payload.id;
      return newState;
    case types.CHANGE_COLOR_SHADOW:
      console.log(action.payload.color);
      newState.list[newState.layoutSelected].shadowColor.rgb.r =
        action.payload.color.rgb.r;
      newState.list[newState.layoutSelected].shadowColor.rgb.g =
        action.payload.color.rgb.g;
      newState.list[newState.layoutSelected].shadowColor.rgb.b =
        action.payload.color.rgb.b;
      return newState;
    default:
      return state;
  }
};

export default TextShadowReducer;

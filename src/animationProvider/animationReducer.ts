export default function animationReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_ANIMATION_ON": {
      return {
        ...state,
        logoWillAnimate: true,
      };
    }
    case "TOGGLE_ANIMATION_OFF": {
      return {
        ...state,
        logoWillAnimate: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

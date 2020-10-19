export default function rootReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR_ON": {
      return {
        ...state,
        sidebar: true,
      };
    }
    case "TOGGLE_SIDEBAR_OFF": {
      return {
        ...state,
        sidebar: false,
      };
    }
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

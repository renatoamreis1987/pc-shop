import CartActionTypes from './cart.types'

const INITIAL_STATE = {
  hidden: true //Because we want to hide the dropdown
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden //If is true will be false, or vice-versa
      };
    default:
      return state;
  }
};

export default cartReducer;
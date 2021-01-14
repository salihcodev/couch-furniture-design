// import actions:
import mobileMenuActionTypes from './mobileMenu.actionTypes';

const INITIAL_STATE = {
  menuHidden: true,
};

const mobileMenuReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case mobileMenuActionTypes.TOGGLE_MENU_VISIBILITY:
      return {
        ...state,
        menuHidden: !state.menuHidden,
      };
    default:
      return state;
  }
};

export default mobileMenuReducer;

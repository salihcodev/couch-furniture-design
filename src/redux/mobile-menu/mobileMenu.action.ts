import mobileMenuActionTypes from './mobileMenu.actionTypes';

export const toggleMenuVisibility = () => ({
  type: mobileMenuActionTypes.TOGGLE_MENU_VISIBILITY,
});

export const closeMobileMenu = () => ({
  type: mobileMenuActionTypes.CLOSE_MOBILE_MENU,
});

import footerLinks from '../../components-data/footerLinks.js';

const INITIAL_STATE = {
  links: footerLinks,
};

const footerReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default footerReducer;

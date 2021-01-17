import { categories, limitedAndNew } from '../../api-mocks/API.data';

const INITIAL_STATE = {
  categories: categories,
  limitedProducts: limitedAndNew,
  newProducts: limitedAndNew,
};

const productsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;

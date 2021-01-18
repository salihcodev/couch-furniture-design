import prodsActionTypes from './products.actionTypes';
import { categories, limitedAndNew } from '../../api-mocks/API.data';

const INITIAL_STATE = {
  categories: categories,
  limitedProducts: limitedAndNew,
  newProducts: limitedAndNew,
  singleProduct: {},
};

const productsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case prodsActionTypes.REDIRECT_TO_SINGLE_PROD:
      // todo: make a reusable HOOK for extracting allProds, filtering.
      let allProds: any = [];
      categories.map(({ products }: any) =>
        products.map((item: any) => allProds.push(item))
      );
      const currentSingleProd = allProds.filter(
        ({ slug }: any) => slug === action.payload
      );
      return { ...state, singleProduct: { ...currentSingleProd } };

    default:
      return state;
  }
};

export default productsReducer;

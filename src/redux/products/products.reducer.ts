import prodsActionTypes from './products.actionTypes';
import { categories, limitedAndNew } from '../../api-mocks/API.data';
import { getAllProds, filterByName } from './hook.util';

// extract all prods in all categories at once
const { storedAllProds } = getAllProds(categories);

const INITIAL_STATE = {
  categories: categories,
  allProducts: storedAllProds,
  itemsToTest: limitedAndNew,
  filteredResult: [],
  singleProduct: {},
};

const productsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case prodsActionTypes.REDIRECT_TO_SINGLE_PROD:
      const currentSingleProd = state.allProducts.filter(
        ({ slug }: any) => slug === action.payload
      );
      return { ...state, singleProduct: { ...currentSingleProd } };

    case prodsActionTypes.FILTER_WITH_SEARCH_TERM:
      const { updatedFilteredResult } = filterByName(
        state.allProducts,
        action.payload
      );
      return { ...state, filteredResult: updatedFilteredResult };

    default:
      return state;
  }
};

export default productsReducer;

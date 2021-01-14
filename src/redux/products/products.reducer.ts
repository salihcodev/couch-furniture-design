import productsApi from '../../api-mocks/appApi';

const INITIAL_STATE = {
  products: productsApi,
};

const productsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;

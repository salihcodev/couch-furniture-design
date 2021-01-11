import { combineReducers } from 'redux';

import productsReducer from './products/Products.reducer';
import routesReducer from './routes/Routes.reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  routes: routesReducer,
});

export default rootReducer;

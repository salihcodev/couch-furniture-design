import { combineReducers } from 'redux';

import productsReducer from './products/products.reducer';
import routesReducer from './routes/routes.reducer';
import mobileMenuReducer from './mobile-menu/mobileMenu.reducer';

const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
  products: productsReducer,
  routes: routesReducer,
});

export default rootReducer;

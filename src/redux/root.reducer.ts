import { combineReducers } from 'redux';

import productsReducer from './products/products.reducer';
import routesReducer from './routes/routes.reducer';
import mobileMenuReducer from './mobile-menu/mobileMenu.reducer';
import footerReducer from './footer/footer.reducer';
import bagReducer from './bag/bag.reducer';
import wishlistReducer from './wishlist/wishlist.reducer';

const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
  routes: routesReducer,
  products: productsReducer,
  footer: footerReducer,
  bag: bagReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;

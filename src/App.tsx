// UTILITIES:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

// IMPORT ROUTES:
import HomePage from './views/home/Home.page';
import Error404Page from './views/error404/Error404.page';
import Signup from './views/signup/Signup.page';
import Trade from './views/trade/Trade.page';
import Signin from './views/login/Login.page';
import LimitedReleases from './views/limited-release/LimitedRelease.page';
import Contact from './views/contact/Contact.page';
import Company from './views/company/Company.page';
import Shop from './views/shop/Shop.page';
import New from './views/new/New.page';
import ShoppingBag from './views/shopping-bag/ShoppingBag.page';
import WishList from './views/wishlist/WishList.page';

// COMPONENTS:
import Header from './components/header/Header.comp';
import Footer from './components/footer/Footer.comp';

// ROOT COMPONENT:=>
const CouchFurnitureDesignApp = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/trade" component={Trade} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/limited-release" component={LimitedReleases} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/new" component={New} />
        <Route exact path="/bag" component={ShoppingBag} />
        <Route exact path="/wishlist" component={WishList} />
        <Route path="*" component={Error404Page} />
      </Switch>
      <Footer />
    </>
  );
};

export default CouchFurnitureDesignApp;

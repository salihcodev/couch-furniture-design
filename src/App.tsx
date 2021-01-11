// UTILITIES:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

// IMPORT ROUTES:
import HomePage from './views/home/Home.page';
import Error404Page from './views/error404/Error404.page';

// ROOT COMPONENT:=>
const CouchFurnitureDesignApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={Error404Page} />
    </Switch>
  );
};

export default CouchFurnitureDesignApp;

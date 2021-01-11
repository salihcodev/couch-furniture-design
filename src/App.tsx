// UTILITIES:
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORT ROUTES:
import HomePage from './views/home/Home.page';
import Error404Page from './views/error404/Error404.page';

// App interface:
interface Props {}

// ROOT COMPONENT:=>
const CouchFurnitureDesignApp: React.FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default CouchFurnitureDesignApp;

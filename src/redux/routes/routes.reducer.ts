import shopRoutes from '../../components-data/shopRoutes';

const INITIAL_STATE = {
  shopRoutes: shopRoutes,
};

const routesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default routesReducer;

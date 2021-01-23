import bagActionTypes from './bag.actionTypes';

const INITIAL_STATE = {
  bagList: [],
};

const bagReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case bagActionTypes.ADD_ITEM_TO_BAG:
      return { ...state, bagList: [...state.bagList, action.payload] };

    default:
      return state;
  }
};

export default bagReducer;

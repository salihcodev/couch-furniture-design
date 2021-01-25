import bagActionTypes from './bag.actionTypes';

export const addItemToBag = (requestedProduct: any) => ({
  type: bagActionTypes.ADD_ITEM_TO_BAG,
  payload: requestedProduct,
});

export const removeBagItem = (slug: any) => ({
  type: bagActionTypes.REMOVE_BAG_ITEM,
  payload: slug,
});

export const decreaseBagItem = (slug: any) => ({
  type: bagActionTypes.DECREASE_BAG_ITEM,
  payload: slug,
});

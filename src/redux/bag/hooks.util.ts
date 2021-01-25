// REMOVE ITEM THE BAG:
export const itemToRemove = (bagList: Array<[]>, productToFilter: string) => {
  const updateBagListAfterRemove = bagList.filter(
    ({ slug }: any) => slug !== productToFilter
  );
  return { updateBagListAfterRemove };
};

// ADD ITEM TO THE BAG:
export const itemToAdd = (
  bagList: Array<[]>,
  productToAdd: any,
  productQuantity: object
) => {
  // check for item existence in bag:
  const itemInBagList = bagList.find(
    ({ slug }: any) => slug === productToAdd.slug
  );

  const updateBagListAfterAdd = itemInBagList
    ? // if it there:
      bagList.map((bagItem: any) =>
        bagItem.slug === productToAdd.slug
          ? // find it again inside the bagList to add:
            {
              ...bagItem,
              count:
                // coming quantity + existed quantity if it >= 8 or
                bagItem.count + productQuantity >= 8
                  ? 8
                  : // add coming quantity + existed quantity
                    bagItem.count + productQuantity,
            }
          : bagItem
      )
    : // if it not:
      // add it to the bag + add new value with the coming quantity
      [...bagList, { ...productToAdd, count: productQuantity }];

  return { updateBagListAfterAdd };
};

// DECREASE ITEM QUANTITY:
export const itemToDecrease = (bagList: Array<[]>, productToFilter: string) => {
  // check for item existence in bag:
  const itemInBagList: any = bagList.find(
    ({ slug }: any) => slug === productToFilter
  );

  const updateBagListAfterDecrease =
    // if it > 2 :
    itemInBagList?.count < 2
      ? // it means it's value 1 and the user need to remove it
        bagList.filter(({ slug }: any) => slug !== productToFilter)
      : // if it not:
        bagList.map((bagItem: any) =>
          bagItem.slug === productToFilter
            ? // find it and -1 it
              { ...bagItem, count: bagItem.count - 1 }
            : bagItem
        );

  return { updateBagListAfterDecrease };
};

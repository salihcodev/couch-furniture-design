export const itemToRemove = (bagList: Array<[]>, productToFilter: string) => {
  const updateBagListAfterRemove = bagList.filter(
    ({ slug }: any) => slug !== productToFilter
  );
  return { updateBagListAfterRemove };
};

export const itemToAdd = (bagList: Array<[]>, productToAdd: any) => {
  // comparing the comer item with every item in bagList:
  const itemInBagList = bagList.find(
    ({ slug }: any) => slug === productToAdd.slug
  );

  const updateBagListAfterAdd = itemInBagList
    ? bagList.map((bagItem: any) =>
        bagItem.slug === productToAdd.slug
          ? { ...bagItem, count: bagItem.count + 1 }
          : bagItem
      ) // else return original bagList with new assigned value. 'count'
    : [...bagList, { ...productToAdd, count: 1 }];

  return { updateBagListAfterAdd };
};

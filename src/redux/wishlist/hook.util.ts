export const removeWishListItem = (wishlist: Array<[]>, filter: any) => {
  const updatedWishListAfterRemove = wishlist.filter(
    ({ slug }: any) => slug !== filter
  );

  return { updatedWishListAfterRemove };
};

export const toggleWishlistItem = (wishlist: Array<[]>, productToWish: any) => {
  const wishedInList = wishlist.find(
    ({ slug }: any) => slug === productToWish.slug
  );

  const updatedWishListAfterWished = wishedInList
    ? wishlist.filter(({ slug }: any) => slug !== productToWish.slug)
    : [...wishlist, { ...productToWish, wished: true }];

  return { updatedWishListAfterWished };
};

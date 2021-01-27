export const getAllProds = (categories: any) => {
  let storedAllProds: any = [];

  categories.map(({ products }: any) =>
    products.map((item: any) => storedAllProds.push(item))
  );
  return { storedAllProds };
};

export const filterByName = (baseToFilter: Array<[]>, searchTerm: string) => {
  const updatedFilteredResult = baseToFilter.filter(({ name }: any) => {
    const cleanName = name.toLowerCase();
    return cleanName.includes(searchTerm);
  });
  return { updatedFilteredResult };
};

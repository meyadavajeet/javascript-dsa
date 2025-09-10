function getSearchProducts<T>(products: T[]): T {
  const myIndex = 44;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 22;
  return products[myIndex];
};

import { ProductType } from '../types/product';

export const useSorting = (products: ProductType[], sortType?: string): ProductType[] => {
  const [...newProducts] = products;

  if (sortType === 'ascending') {
    return newProducts.sort(
      (a: ProductType, b: ProductType) => Number(b.price) - Number(a.price),
    );
  }
  return newProducts.sort(
    (a: ProductType, b: ProductType) => Number(a.price) - Number(b.price),
  );
};

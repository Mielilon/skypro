import React, { useEffect, useState } from 'react';
import { useSorting } from '../../../hooks/useSorting';
import { productData } from '../../../mocks/product';
import Card from '../../blocks/Card/Card';
import './Catalog.sass';

type CatalogProps = {
  sortType: string
};

function Catalog({ sortType }: CatalogProps): React.ReactElement {
  const sortedProductList = useSorting(productData, sortType);
  const [productList, setProductList] = useState(sortedProductList);

  useEffect(() => {
    setProductList(useSorting(productData, sortType));
  }, [sortType]);

  return (
    <div className="catalog">
      {productList.map((product) => (
        <Card
          key={product.id}
          parentClassName="catalog"
          img={product.img}
          title={product.title}
          desc={product.desc}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default Catalog;

import React, { useState } from 'react';
import Select from '../../entry/Select/Select';
import Catalog from '../../layout/Catalog/Catalog';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import './CatalogPage.sass';

function CatalogPage(): React.ReactElement {
  const [sortType, setSortType] = useState('');
  return (
    <div className="page page--catalog">
      <Header />
      <Main modifierClassName="catalog">
        <>
          <Select parentClassName="catalog" setSortType={setSortType} />
          <Catalog sortType={sortType} />
        </>
      </Main>
    </div>
  );
}

export default CatalogPage;

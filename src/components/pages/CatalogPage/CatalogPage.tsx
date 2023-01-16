import React from 'react';
import Select from '../../entry/Select/Select';
import Catalog from '../../layout/Catalog/Catalog';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import './CatalogPage.sass';

function CatalogPage(): React.ReactElement {
  return (
    <div className="page page--catalog">
      <Header />
      <Main modifierClassName="catalog">
        <>
          <Select parentClassName="catalog" />
          <Catalog />
        </>
      </Main>
    </div>
  );
}

export default CatalogPage;

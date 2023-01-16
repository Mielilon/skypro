import React from 'react';
import Card from '../../blocks/Card/Card';
import './Catalog.sass';

function Catalog(): React.ReactElement {
  return (
    <div className="catalog">
      <Card
        parentClassName="catalog"
      />
      <Card
        parentClassName="catalog"
      />
      <Card
        parentClassName="catalog"
      />
      <Card
        parentClassName="catalog"
      />
    </div>
  );
}

export default Catalog;

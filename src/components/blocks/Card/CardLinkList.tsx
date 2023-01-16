import React from 'react';
import './Card.sass';

function CardLinkList(): React.ReactElement {
  return (
    <div className="card__link-list">
      <button type="button" className="card__link">Избранные</button>
      <button type="button" className="card__link">Удалить</button>
    </div>
  );
}

export default CardLinkList;

import React from 'react';
import './Main.sass';

type MainProps = {
  children: JSX.Element
  modifierClassName?: string
};

function Main({ children, modifierClassName }: MainProps): React.ReactElement {
  return (
    <main className="main">
      <div className={`main__container ${modifierClassName ? `main__container--${modifierClassName}` : ''} container`}>
        {children}
      </div>
    </main>
  );
}

export default Main;

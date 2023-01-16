import React from 'react';
import './Button.sass';

type ButtonProps = {
  parentClassName?: string
  modifierClassName?: string
  children: JSX.Element | string
};

function Button({ parentClassName, modifierClassName, children }: ButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      className={`${parentClassName ? `${parentClassName}__button` : ''} button ${modifierClassName ? `button--${modifierClassName}` : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;

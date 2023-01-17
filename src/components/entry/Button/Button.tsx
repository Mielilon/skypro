import React from 'react';
import './Button.sass';

type ButtonProps = {
  parentClassName?: string
  modifierClassName?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children: JSX.Element | string
};

function Button({
  parentClassName, modifierClassName, children, onClick,
}: ButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      onClick={(e) => onClick(e)}
      className={`${parentClassName ? `${parentClassName}__button` : ''} button ${modifierClassName ? `button--${modifierClassName}` : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;

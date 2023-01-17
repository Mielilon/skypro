import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../../assets/img/logo.svg';
import { AppRoute } from '../../../const';
import './Logo.sass';

type LogoProps = {
  parentClassName: string
};

function Logo({ parentClassName }: LogoProps): React.ReactElement {
  return (
    <Link
      to={AppRoute.CATALOG}
      className={`${parentClassName ? `${parentClassName}__logo` : ''} logo`}
    >
      <LogoIcon className="logo__img" />
    </Link>
  );
}

export default Logo;

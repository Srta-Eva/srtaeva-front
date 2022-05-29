import { Header } from '@components';
import React from 'react';

interface NavBarLayoutProps {
  children: React.ReactNode;
}

const NavBarLayout: React.FC<NavBarLayoutProps> = props => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default NavBarLayout;

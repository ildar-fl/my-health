import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { Img } from 'ui';
import { Link } from 'tools';
import { ROUTS } from 'routing/constants';
import { Logo } from './components';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 700px;
  background: #cccaca;
`;

const WrapperChildren = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 8px;
  background: #b27fff;
`;

const TitleNav = styled.nav<SpaceProps>`
  display: flex;
  gap: 30px;

  ${space}
`;

const TitleNavItem = styled(Link)``;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

interface IUserLayoutProps {
  children: ReactNode;
}

const UserLayout: FC = () => {
  return (
    <LayoutContainer>
      <Header>
        <Logo />
        <TitleNav ml='20px'>
          <TitleNavItem to={ROUTS.MED_CARDS}>мед карта</TitleNavItem>
          <TitleNavItem to={ROUTS.ANALYZES}>анализы</TitleNavItem>
        </TitleNav>
        <ProfileContainer>
          Ильдар Фасхетдинов
          <Img rounded ml='8px' />
        </ProfileContainer>
      </Header>
      <WrapperChildren>
        <Outlet />
      </WrapperChildren>
    </LayoutContainer>
  );
};

export { UserLayout };

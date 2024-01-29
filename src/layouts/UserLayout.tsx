import { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { space, SpaceProps } from 'styled-system';
import { Img } from 'ui';
import { Link } from 'tools/navigate';
import { ROUTS } from 'routing/constants';
import { Logo, LayoutContainer, WrapperChildren, Header } from './components';

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

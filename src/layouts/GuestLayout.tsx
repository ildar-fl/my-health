import { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Img } from 'ui';
import { Logo, LayoutContainer, Header, WrapperChildren } from './components';
import { Link } from 'tools';
import { ROUTS } from 'routing/constants';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const GuestLayout: FC = () => {
  return (
    <LayoutContainer>
      <Header>
        <Logo />
        <ProfileContainer as={Link} to={ROUTS.LOGIN}>
          Войти
          <Img rounded ml='8px' />
        </ProfileContainer>
      </Header>
      <WrapperChildren>
        <Outlet />
      </WrapperChildren>
    </LayoutContainer>
  );
};

export { GuestLayout };

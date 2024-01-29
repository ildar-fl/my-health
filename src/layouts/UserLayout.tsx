import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { space, SpaceProps } from 'styled-system';
import { Img } from 'ui';
import { ROUTS } from 'routing/constants';
import { Logo, LayoutContainer, WrapperChildren, Header } from './components';

const TitleNav = styled.nav<SpaceProps>`
  display: flex;
  gap: 30px;

  ${space}
`;

const TitleNavItem = styled.a``;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

interface IUserLayoutProps {
  children: ReactNode;
}

const UserLayout: FC<IUserLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <Logo />
        <TitleNav ml='20px'>
          <TitleNavItem href={ROUTS.MED_CARDS}>мед карта</TitleNavItem>
          <TitleNavItem href={ROUTS.ANALYZES}>анализы</TitleNavItem>
        </TitleNav>
        <ProfileContainer>
          User001
          <Img rounded ml='8px' />
        </ProfileContainer>
      </Header>
      <WrapperChildren>{children}</WrapperChildren>
    </LayoutContainer>
  );
};

export { UserLayout };

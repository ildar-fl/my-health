import { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { space, SpaceProps } from 'styled-system';
import { ContextMenu, ContextMenuItem, Img, Modal } from 'ui';
import { Link, useNavigate } from 'tools/navigate';
import { ROUTS } from 'routing/constants';
import { Logo, LayoutContainer, WrapperChildren, Header } from './components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { userActions } from 'core/user/reducer';

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
  cursor: pointer;
`;

const UserLayout: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const handleLogout = () => {
    dispatch(userActions.resetUser());
    push(ROUTS.LOGIN);
  };

  const user = useAppSelector(store => store.user);

  return (
    <LayoutContainer>
      <Header>
        <Logo />
        <TitleNav ml='20px'>
          <TitleNavItem to={ROUTS.MED_CARDS}>мед карта</TitleNavItem>
          <TitleNavItem to={ROUTS.ANALYZES}>анализы</TitleNavItem>
        </TitleNav>
        <ProfileContainer ref={profileRef} onClick={handleToggleOpen}>
          {user!.firstName} {user!.secondName}
          <Img rounded ml='8px' />
        </ProfileContainer>
        <ContextMenu
          isOpen={isOpen}
          anchorEl={profileRef.current}
          setOpen={setIsOpen}
        >
          <ContextMenuItem label='Профиль' as={Link} to={ROUTS.PROFILE} />
          <ContextMenuItem label='Выйти' onClick={handleLogout} />
        </ContextMenu>
      </Header>
      <WrapperChildren>
        <Outlet />
      </WrapperChildren>
      <Modal />
    </LayoutContainer>
  );
};

export { UserLayout };

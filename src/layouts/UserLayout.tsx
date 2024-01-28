import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: gray;
`;

const Header = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  background: aquamarine;
`;

interface IUserLayoutProps {
  children: ReactNode;
}

const UserLayout: FC<IUserLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header></Header>
      {children}
    </LayoutContainer>
  );
};

export { UserLayout };

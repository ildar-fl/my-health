import styled from 'styled-components';

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
  background: #b6e9a2;
`;

export { LayoutContainer, WrapperChildren, Header };

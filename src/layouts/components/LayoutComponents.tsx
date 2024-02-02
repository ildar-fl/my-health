import styled from 'styled-components';

import backgroundImage from 'static/background.jpg';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 700px;
  background: #cccaca;
  background-image: url(${backgroundImage});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WrapperChildren = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 8px;
  background: #3c7224;
  opacity: 80%;
`;

export { LayoutContainer, WrapperChildren, Header };

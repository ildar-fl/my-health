import styled from 'styled-components';

import { ROUTS } from 'routing/constants';

const TitleLogo = styled.a`
  font-size: 35px;
`;

const Logo = () => {
  return <TitleLogo href={ROUTS.HOME}>My health</TitleLogo>;
};

export { Logo };

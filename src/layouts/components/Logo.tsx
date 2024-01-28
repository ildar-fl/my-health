import styled from 'styled-components';

import { ROUTS } from 'routing/constants';
import { Link } from 'tools';

const TitleLogo = styled(Link)`
  font-size: 35px;
  font-family: 'Honk', system-ui;
  transform: rotate(-5deg);
  transition: transform 50ms ease-in;

  &:hover {
    transform: rotate(0);
  }
`;

const Logo = () => {
  return <TitleLogo to={ROUTS.HOME}>My health</TitleLogo>;
};

export { Logo };

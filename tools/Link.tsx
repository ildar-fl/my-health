import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FC, ReactNode } from 'react';

const StyledLink = styled(ReactRouterLink)`
  text-decoration: none;
`;

interface ILinkProps {
  className?: string;
  to: string;
  children: ReactNode;
}

const Link: FC<ILinkProps> = ({ className, to, children }) => {
  return (
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  );
};

export { Link };

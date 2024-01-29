import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const StyledLink = styled.a`
  text-decoration: none;
`;

interface ILinkProps {
  className?: string;
  to: string;
  children: ReactNode;
}

const Link: FC<ILinkProps> = ({ className, to, children }) => {
  return (
    <StyledLink className={className} href={to}>
      {children}
    </StyledLink>
  );
};

export { Link };

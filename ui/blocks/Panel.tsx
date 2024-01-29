import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 0 10px 10px 10px;
  background: aliceblue;
  border: gray 1px solid;
  border-radius: 5px;
`;

interface IPanelProps {
  children: ReactNode;
}

const Panel: FC<IPanelProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { Panel };

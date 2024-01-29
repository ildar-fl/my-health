import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { WidthProps, AlignSelfProps, alignSelf, width } from 'styled-system';

const Container = styled.div<WidthProps & AlignSelfProps>`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 0 10px 10px 10px;
  background: aliceblue;
  border: gray 1px solid;
  border-radius: 5px;

  ${width};
  ${alignSelf};
`;

interface IPanelProps {
  children: ReactNode;
}

const Panel: FC<IPanelProps & WidthProps & AlignSelfProps> = ({
  children,
  ...other
}) => {
  return <Container {...other}>{children}</Container>;
};

export { Panel };

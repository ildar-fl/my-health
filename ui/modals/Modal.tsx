import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(8px);
`;

interface IModal {}

const Modal: FC<IModal & PropsWithChildren> = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

export { Modal };

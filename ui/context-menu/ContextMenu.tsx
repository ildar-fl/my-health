import {
  FC,
  CSSProperties,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import { Dropdown } from '../dropdown';

const ContextMenuContainer = styled(Dropdown)`
  width: 140px;
`;

interface IContextMenuProps {
  className?: string;
  style?: CSSProperties;
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const ContextMenu: FC<IContextMenuProps & PropsWithChildren> = ({
  isOpen,
  anchorEl,
  children,
  setOpen,
}) => {
  return (
    <ContextMenuContainer isOpen={isOpen} anchorEl={anchorEl} setOpen={setOpen}>
      {children}
    </ContextMenuContainer>
  );
};

export { ContextMenu };

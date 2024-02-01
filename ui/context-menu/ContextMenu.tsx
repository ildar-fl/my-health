import {
  FC,
  CSSProperties,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import { Dropdown } from 'ui';

const ContextMenuContainer = styled(Dropdown)``;

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
}) => {
  return (
    <ContextMenuContainer isOpen={isOpen} anchorEl={anchorEl}>
      {children}
    </ContextMenuContainer>
  );
};

export { ContextMenu };

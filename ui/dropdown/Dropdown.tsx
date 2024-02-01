import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  FloatingFocusManager,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #676666;
  border-radius: 5px;
  background: aliceblue;
  width: 100px;
`;

interface IDropdownProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  className?: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const Dropdown: FC<IDropdownProps & PropsWithChildren> = ({
  isOpen,
  anchorEl,
  className,
  children,
  setOpen,
}) => {
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
    elements: {
      reference: anchorEl,
    },
  });

  // const click = useClick(context);
  const dismiss = useDismiss(context);
  // const role = useRole(context);

  const { getFloatingProps } = useInteractions([dismiss]);

  if (!isOpen) return null;

  return (
    <FloatingFocusManager context={context} modal={false}>
      <DropdownContainer
        className={`Popover ${className}`}
        ref={refs.setFloating}
        style={floatingStyles}
        {...getFloatingProps}
      >
        {children}
      </DropdownContainer>
    </FloatingFocusManager>
  );
};

export { Dropdown };

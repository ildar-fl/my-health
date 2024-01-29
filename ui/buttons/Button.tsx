import { FC } from 'react';
import styled from 'styled-components';

interface IStyledButton {
  disabled?: boolean;
}

const StyledButton = styled.button<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 10px;
  font-family: inherit;
  cursor: pointer;
`;

interface IButtonProps {
  label: string;
  disabled?: boolean;
  onClick: VoidFunction;
}

const Button: FC<IButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export { Button };

import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

interface IStyledButton {
  disabled?: boolean;
}

const StyledButton = styled.button<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: fit-content;
  font-size: 10px;
  font-family: inherit;
  cursor: pointer;
`;

interface IButtonProps {
  label: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  onClick?: VoidFunction;
}

const Button: FC<IButtonProps> = ({ label, type, disabled, onClick }) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export { Button };

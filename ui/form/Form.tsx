import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { FormLabel } from '../labels/FormLabel';

const FormContainer = styled.form<SpaceProps & { $gap?: number }>(
  ({ $gap }) => css`
    display: flex;
    flex-direction: column;

    ${$gap &&
    css`
      gap: ${$gap}px;
    `}

    ${space};
  `,
);

interface IFormProps {
  label?: string;
  $gap?: number;
  children: ReactNode;
  onSubmit: VoidFunction;
}

const Form: FC<IFormProps & SpaceProps> = ({
  label,
  children,
  onSubmit,
  ...other
}) => {
  return (
    <FormContainer onSubmit={onSubmit} {...other}>
      {label && <FormLabel label={label} />}
      {children}
    </FormContainer>
  );
};

export { Form };

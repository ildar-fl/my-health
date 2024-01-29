import { FC } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const FormLabelWrapper = styled.label<SpaceProps>`
  font-size: 8px;

  ${space}
`;

interface ISimpleLabelProps {
  id?: string;
  label: string;
}

const SimpleLabel: FC<ISimpleLabelProps & SpaceProps> = ({
  id = '',
  label,
  ...other
}) => {
  return (
    <FormLabelWrapper htmlFor={id} {...other}>
      {label}
    </FormLabelWrapper>
  );
};

export { SimpleLabel };

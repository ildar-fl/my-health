import styled from 'styled-components';
import { FC } from 'react';

const FormLabelWrapper = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;

interface IFormLabelProps {
  label: string;
}

const FormLabel: FC<IFormLabelProps> = ({ label }) => {
  return <FormLabelWrapper>{label}</FormLabelWrapper>;
};

export { FormLabel };

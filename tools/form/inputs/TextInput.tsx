import { Container, SimpleLabel } from 'ui';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 30px;
`;

interface ITextInputProps<T extends FieldValues> {
  id: Path<T>;
  type?: string;
  label?: string;
  register: UseFormRegister<T>;
  required?: boolean;
}

const TextInput = <T extends FieldValues>({
  id,
  label,
  type,
  required,
  register,
}: ITextInputProps<T>) => {
  return (
    <Container $column>
      {label && <SimpleLabel id={id} label={label} mb='4px' />}
      <StyledInput id={id} {...register(id, { required })} type={type} />
    </Container>
  );
};

export { TextInput };

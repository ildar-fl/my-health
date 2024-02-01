import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Panel, Form, Container } from 'ui';
import { TextInput } from 'tools/form';
import { useNavigate } from 'tools/navigate';
import { ROUTS } from 'routing/constants';

interface ILoginForm {
  phone: string;
}

const Login: FC = () => {
  const { register, handleSubmit } = useForm<ILoginForm>();

  const { push } = useNavigate();

  const onSubmit: SubmitHandler<ILoginForm> = values => {
    console.log(values);
  };

  const onRegistration = () => {
    push(ROUTS.REGISTRATION);
  };

  return (
    <Panel width='400px' alignSelf='center'>
      <Form
        label='Авторизация'
        onSubmit={handleSubmit(onSubmit)}
        mt='10px'
        $gap={10}
      >
        <TextInput
          id='phone'
          type='phone'
          label='Телефон'
          register={register}
        />
        <Container justifyContent='space-between'>
          <Button label='Регистрация' onClick={onRegistration} />
          <Button type='submit' label='Войти' />
        </Container>
      </Form>
    </Panel>
  );
};

export { Login };

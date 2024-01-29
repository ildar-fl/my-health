import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Panel, Form, Container } from 'ui';
import { TextInput } from 'tools/form';
import { useNavigate } from 'tools/navigate';
import { ROUTS } from 'routing/constants';

interface ILoginForm {
  email: string;
  password: string;
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
          id='email'
          type='email'
          label='Введите емайл'
          register={register}
        />
        <TextInput
          id='password'
          label='Введите пароль'
          type='password'
          register={register}
        />
        <Container justifyContent='space-between'>
          <Button type='submit' label='Войти' />
          <Button label='Регистрация' onClick={onRegistration} />
        </Container>
      </Form>
    </Panel>
  );
};

export { Login };

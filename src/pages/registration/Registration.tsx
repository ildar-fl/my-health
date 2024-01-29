import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Panel, Form, Container } from 'ui';
import { TextInput } from 'tools/form';
import { useNavigate } from 'tools/navigate';
import { ROUTS } from 'routing/constants';
import { postRegistrationUser } from '../../../api/auth';

interface IRegistrationForm {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Registration: FC = () => {
  const { register, handleSubmit } = useForm<IRegistrationForm>();

  const { push } = useNavigate();

  const onSubmit: SubmitHandler<IRegistrationForm> = async values => {
    console.log(values);

    try {
      await postRegistrationUser(values);
    } catch (e) {
      console.error('Error registration: ', e);
    }
  };

  const onLogin = () => {
    push(ROUTS.LOGIN);
  };

  return (
    <Panel width='400px' alignSelf='center'>
      <Form
        label='Регистрация'
        onSubmit={handleSubmit(onSubmit)}
        mt='10px'
        $gap={10}
      >
        <TextInput id='firstName' label='Введите имя' register={register} />
        <TextInput
          id='secondName'
          label='Введите фамилию'
          register={register}
        />
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
        <TextInput
          id='repeatPassword'
          label='Повторите пароль'
          type='password'
          register={register}
        />
        <Container justifyContent='space-between'>
          <Button type='submit' label='Регистрация' />
          <Button type='button' label='Войти' onClick={onLogin} />
        </Container>
      </Form>
    </Panel>
  );
};

export { Registration };

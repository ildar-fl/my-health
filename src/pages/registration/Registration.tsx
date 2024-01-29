import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Panel, Form, Container } from 'ui';
import { TextInput } from 'tools/form';
import { useNavigate } from 'tools/navigate';
import { ROUTS } from 'routing/constants';
import { useAppDispatch } from 'store/hooks';
import { postRegistrationUser } from '../../../api/auth';
import { userActions } from 'core/user/reducer';

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
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IRegistrationForm> = async values => {
    console.log(values);

    try {
      await postRegistrationUser(values);
    } catch (e) {
      console.error('Error registration: ', e);
      return;
    }

    const user = {
      email: values.email,
      firstName: values.firstName,
      secondName: values.secondName,
    };

    dispatch(userActions.setUser(user));

    window.localStorage.setItem('user', JSON.stringify(user));

    push(ROUTS.HOME);
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

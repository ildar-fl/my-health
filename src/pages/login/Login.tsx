import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, Panel, Form } from 'ui';
import { TextInput } from 'tools/form';

interface ILoginForm {
  login: string;
  password: string;
}

const Login: FC = () => {
  const { register, handleSubmit } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = values => {
    console.log(values);
  };

  return (
    <Panel width='400px' alignSelf='center'>
      <Form
        label='Авторизация'
        onSubmit={handleSubmit(onSubmit)}
        mt='10px'
        $gap={10}
      >
        <TextInput id='login' label='Введите имя' register={register} />
        <TextInput
          id='password'
          label='Введите пароль'
          type='password'
          register={register}
        />
        <Button type='submit' label='Войти' />
      </Form>
    </Panel>
  );
};

export { Login };

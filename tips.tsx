/**
 * Google fonts
 */
/*

<link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />

// logo
font-family: 'Honk', system-ui;

// always text
font-family: 'Press Start 2P', system-ui;

*/

/**
 * UserLayout
 */
/*
const UserLayout: FC = () => {
  const user = useAppSelector(store => store.user);

  return (
    <LayoutContainer>
      <Header>
        <Logo />
        <TitleNav ml='20px'>
          <TitleNavItem to={ROUTS.MED_CARDS}>мед карта</TitleNavItem>
          <TitleNavItem to={ROUTS.ANALYZES}>анализы</TitleNavItem>
        </TitleNav>
        <ProfileContainer>
          {user!.firstName} {user!.secondName}
          <Img rounded ml='8px' />
        </ProfileContainer>
      </Header>
      <WrapperChildren>
        <Outlet />
      </WrapperChildren>
    </LayoutContainer>
  );
};
 */

/**
 * App
 */

/*
// const IS_AUTH = false;

const user = useAppSelector(store => store.user);

  if (!!user) {
    return (
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Analyzes />} />
          <Route path={ROUTS.ANALYZES} element={<Analyzes />} />
          <Route path={ROUTS.MED_CARDS} element={<MedCards />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<GuestLayout />}>
        <Route path={ROUTS.LOGIN} element={<Login />} />
        <Route path={ROUTS.REGISTRATION} element={<Registration />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );

 */

/**
 * Analyzes
 */

/*

const Analyzes: FC = () => {
  const queryClient = useQueryClient();
  // const [analyzes, setAnalyzes] = useState(backendData);

  const { isLoading, data, isRefetching } = useQuery({
    queryKey: ['analyzes'],
    queryFn: fetchAnalyzes,
  });

  const { mutate } = useMutation({
    mutationFn: postAnalyzes,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['analyzes'] });
    },
  });

  const handleAddAnalyze = () => {
    // setAnalyzes(prev => [
    //   {
    //     name: `Холестерин ${prev.length}`,
    //     mark: Math.random() * 201 - 100,
    //     unit: 'ед. из',
    //     date: new Date().toLocaleDateString(),
    //     laboratory: 'Хеликс',
    //   },
    //   ...prev,
    // ]);

    mutate([
      {
        name: `Холестерин ${data!.length}`,
        mark: Math.random() * 201 - 100,
        unit: 'ед. из',
        date: new Date().toLocaleDateString(),
        laboratory: 'Хеликс',
      },
      ...data!,
    ]);
  };

  return (
    <Panel>
      <ControlWrapper>
        Анализы: {data?.length ?? 0}
        <Button
          disabled={isLoading || isRefetching}
          label='Добавить анализ'
          onClick={handleAddAnalyze}
        />
      </ControlWrapper>
      {isLoading ? (
        'Loading....'
      ) : (
        <Container $gap={5} $column>
          {data!.map(({ name, mark, unit, date, laboratory }) => (
            <AnalyzeCard
              name={name}
              mark={mark}
              unit={unit}
              date={date}
              laboratory={laboratory}
            />
          ))}
        </Container>
      )}
    </Panel>
  );
};
 */

/**
 * ---------------------------- PROVIDERS ----------------
 */

/*
const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </BrowserRouter>
    </QueryClientProvider>
 */

/**
 * ----------------STORE-----------------------
 */

/*
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store };
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 */

/*

export interface IUser {
  firstName: string;
  secondName: string;
  email: string;
}

const localStorageUser = window.localStorage.getItem('user');

const initialState = localStorageUser
  ? (JSON.parse(localStorageUser) as IUser)
  : null;

console.log(initialState);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<IUser>) => action.payload,
    resetUser: () => null,
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
*/

/**
 * ----------------------- REGISTRATION ---------------
 */

/*
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
 */

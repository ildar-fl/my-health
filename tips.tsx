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

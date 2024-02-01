import { Route, Routes } from 'react-router-dom';

import { GuestLayout, UserLayout } from 'layouts';
import { ROUTS } from 'routing/constants';

import { Analyzes } from './pages/analyzes';
import { Login } from './pages/login';
import { MedCards } from './pages/med-cards';
import { Registration } from './pages/registration';
import { NotFoundPage } from './pages/errors';
import { useAppSelector } from 'store/hooks';

function App() {
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
}

export default App;

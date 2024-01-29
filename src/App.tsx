import React from 'react';
import { UserLayout } from 'layouts';
import { Analyzes } from './pages/analyzes';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { ROUTS } from 'routing/constants';
import { Login } from './pages/login';
import { MedCards } from './pages/med-cards';
import { Registration } from './pages/registration';

const IS_AUTH = true;

function App() {
  if (IS_AUTH) {
    return (
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Analyzes />} />
          <Route path={ROUTS.ANALYZES} element={<Analyzes />} />
          <Route path={ROUTS.MED_CARDS} element={<MedCards />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route path={ROUTS.LOGIN} element={<Login />} />
        <Route path={ROUTS.REGISTRATION} element={<Registration />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { UserLayout } from 'layouts';

const Container = styled.div`
  display: flex;
  width: 100%;
  background: gray;
  border-radius: 3px;
`;

function App() {
  return (
    <UserLayout>
      <Container>Медицинские анализы</Container>
      <div className='w-100 bg-grey rounded'>Медицинские анализы</div>
    </UserLayout>
  );
}

export default App;

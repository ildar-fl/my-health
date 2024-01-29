import { FC } from 'react';
import { Container } from 'ui';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 10px;
  border: 1px black solid;
  border-radius: 5px;
  background: white;
  transition: background 100ms ease-in;

  &:hover {
    background: #d5fa9a;
    cursor: pointer;
  }
`;

interface IAnalyzeCardProps {
  name: string;
  mark: string | number;
  date: string;
  unit: string;
  laboratory: string;
}
const AnalyzeCard: FC<IAnalyzeCardProps> = ({
  name,
  mark,
  unit,
  date,
  laboratory,
}) => {
  return (
    <CardContainer>
      <Container>
        {name}: {mark} {unit}
      </Container>
      <Container justifyContent='space-between' color='#655f5f' fontSize='8px'>
        <Container>Лаборатория: {laboratory}</Container>
        <Container>Дата: {date}</Container>
      </Container>
    </CardContainer>
  );
};

export { AnalyzeCard };

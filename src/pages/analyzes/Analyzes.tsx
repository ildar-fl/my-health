import { FC } from 'react';
import styled from 'styled-components';

import { AnalyzeCard } from './components';
import { Button, Panel } from 'ui';
import backendData from './data.json';

const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const Analyzes: FC = () => {
  const analyze = backendData[0];

  return (
    <Panel>
      <ControlWrapper>
        Анализы: 1
        <Button disabled={false} label='Добавить анализ' />
      </ControlWrapper>
      <AnalyzeCard
        name={analyze.name}
        mark={analyze.mark}
        unit={analyze.unit}
        date={analyze.date}
        laboratory={analyze.laboratory}
      />
    </Panel>
  );
};

export { Analyzes };

import { FC } from 'react';
import { Button, Panel, Container } from 'ui';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { AnalyzeCard } from './components';
// import backendData from './data.json';
import { fetchAnalyzes, postAnalyzes } from '../../../api/analyzes';

const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

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

export { Analyzes };

import { useNavigate as useReactRouterNavigate } from 'react-router-dom';
import { useCallback } from 'react';

interface INavigateReturnProps {
  push: (path: string) => void;
}

const useNavigate = (): INavigateReturnProps => {
  const navigate = useReactRouterNavigate();

  const push = useCallback((path: string) => {
    navigate(path);
  }, []);

  return { push };
};

export { useNavigate };

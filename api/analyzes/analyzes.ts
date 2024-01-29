import { request } from '../request';
import { IAnalyze } from './type';

export const fetchAnalyzes = () => {
  return request.get<IAnalyze[]>('/analyzes').then(result => result ?? []);
};

export const postAnalyzes = (data: any) => {
  return request.post('/analyzes', data);
};

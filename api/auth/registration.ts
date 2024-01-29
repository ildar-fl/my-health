import { request } from '../request';

export const postRegistrationUser = (data: any) => {
  return request.post('/registration', data);
};

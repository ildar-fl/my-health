interface IRequest {
  post: (url: string, data: any) => Promise<void>;
  get: <T>(url: string) => Promise<T>;
}

const request: IRequest = {} as any;

export { request };

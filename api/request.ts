interface IRequest {
  post: (url: string, data: any) => Promise<void>;
  get: <T>(url: string) => Promise<T>;
}

const request: IRequest = {
  post: async (url, data) => {
    return new Promise(resolve => {
      setTimeout(() => {
        window.localStorage.setItem(url, JSON.stringify(data));

        resolve();
      }, 400);
    });
  },
  get: async url => {
    const data = window.localStorage.getItem(url);

    const result = typeof data === 'string' ? JSON.parse(data) : null;

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result as any);
      }, 1000);
    });
  },
};

export { request };

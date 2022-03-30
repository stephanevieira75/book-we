// FIXME: Use real data types instead of any
export type ListResponseData<T> = {
  config: { [key: string]: any };
  data: T;
  headers: { [key: string]: any };
  request: { [key: string]: any };
  status: number;
  statusText: string;
};

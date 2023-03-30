export interface SuccesResponse<Data> {
  count: number;
  next: string;
  previous: null;
  results: Data;
}

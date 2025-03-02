import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next?: string;
}

const axios_instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d33c17735c64dad8df8a44c4bae0407",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (params: AxiosRequestConfig = {}) => {
    return axios_instance
      .get<FetchResponse<T>>(this.endpoint, params)
      .then((res) => res.data);
  };

  get = (id?: number | string) => {
    return axios_instance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;

import { useEffect, useState } from "react";
import client from "../services/api-client";
import {AxiosRequestConfig, CanceledError } from "axios";

interface ClientResponse<T> {
  results: T[];
  count: number;
}

const useData = <T>(
  endpoint: string,
  requestParam?: AxiosRequestConfig,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      client
        .get<ClientResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestParam,
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    dep ? [...dep] : []
  );

  return { data, error, loading };
};

export default useData;

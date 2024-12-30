import { useEffect, useState } from "react";
import client from "../services/api-client";
import { CanceledError } from "axios";

interface ClientResponse<T> {
  results: T[];
  count: number;
}

const useData = <T>(endpoint: string) => {
  const [data, setGames] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    client
      .get<ClientResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, error, loading };
};

export default useData;

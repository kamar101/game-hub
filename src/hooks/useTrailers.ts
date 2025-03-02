import Trailer from "@/entities/Trailer";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useTrailers = (gameId: number) => {
  const apiclient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["gameTrailer", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useTrailers;

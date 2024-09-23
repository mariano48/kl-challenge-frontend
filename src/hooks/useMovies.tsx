import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMoviesWithGeolocations } from "../services/Movies";

const useMovies = () => {
  const [searchTitle, setSearchTitle] = useState<string>("");
  const queryClient = useQueryClient();

  const moviesQuery = useQuery(
    ["movies", searchTitle],
    () => getMoviesWithGeolocations({ title: searchTitle }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const moviesMutation = useMutation({
    mutationFn: (title: string) => getMoviesWithGeolocations({ title }),
    onSuccess: (data) => {
      queryClient.setQueryData(["movies", searchTitle], data);
    },
  });

  return {
    moviesQuery,
    moviesMutation,
    setSearchTitle,
  };
};

export default useMovies;

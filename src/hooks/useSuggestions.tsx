import { useQuery } from "react-query";
import { getMovieSuggestions } from "../services/Movies";

export const useSuggestions = (title: string) => {
  return useQuery("suggestions", () => getMovieSuggestions(title), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

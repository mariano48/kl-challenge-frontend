import { IMovie } from "../types/Movies";
import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL;
export const getMoviesWithGeolocations = async ({
  title,
}: {
  title: string;
}) => {
  const url = title
    ? `${API_BASE_URL}/movies?title=${title}`
    : `${API_BASE_URL}/movies`;

  try {
    const { data: movies } = await axios.get<IMovie[]>(url);
    return movies;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMovieSuggestions = async (title: string) => {
  if (!title) return;
  try {
    const { data: titles } = await axios.get<string[]>(
      `${API_BASE_URL}/suggestions?title=${title}`
    );
    return titles;
  } catch (error) {
    throw new Error(error.message);
  }
};

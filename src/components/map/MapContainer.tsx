import { APIProvider } from "@vis.gl/react-google-maps";
import useMovies from "../../hooks/useMovies";
import GoogleMap from "./GoogleMap";
export default function MapContainer() {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  const {
    moviesQuery: { data: movies, isLoading, isError },
  } = useMovies();

  return (
    <div className="h-full w-full flex items-center justify-center text-black">
      {!API_KEY && <p>Missing Google Maps api key</p>}
      {isLoading && <p>Loading...</p>}
      {movies && API_KEY && (
        <APIProvider apiKey={API_KEY}>
          <GoogleMap movies={movies} />
        </APIProvider>
      )}
      {isError && !isLoading && (
        <p data-cy="no-movies-found">No movies found</p>
      )}
    </div>
  );
}

import { IMovie } from "@/types/Movies";
import { InfoWindow } from "@vis.gl/react-google-maps";

interface IMovieLocationInfoProps {
  movie: IMovie;
}

export default function MovieLocationInfo({ movie }: IMovieLocationInfoProps) {
  return (
    <InfoWindow
      position={movie.geolocation}
      headerContent={
        <h2 className="text-black font-bold text-lg">{movie.locations}</h2>
      }
      style={{ color: "black" }}
    >
      <div className="flex flex-col gap-1 text-lg">
        <p className="font-bold text-lg">Movie: {movie.title}</p>
        <p>Production company: {movie.production_company}</p>
        <p>Director: {movie.director}</p>
        <p>
          Actors: {movie.actor_1}, {movie.actor_2}
        </p>
        <p>Writer: {movie.writer}</p>
        <p>Release date: {movie.release_year}</p>
      </div>
    </InfoWindow>
  );
}

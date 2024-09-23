import { IMovie } from "@/types/Movies";
import { Marker } from "@vis.gl/react-google-maps";
import MovieLocationInfo from "./MovieLocationInfo";

interface IMarkerWithInfoProps {
  movie: IMovie;
  isOpen: boolean;
  onMarkerClick: () => void;
}

export default function GoogleMarker({
  movie,
  isOpen,
  onMarkerClick,
}: IMarkerWithInfoProps) {
  return (
    <div className="text-black" data-cy="marker">
      <Marker position={movie.geolocation} onClick={onMarkerClick} />
      {isOpen && <MovieLocationInfo movie={movie} />}
    </div>
  );
}

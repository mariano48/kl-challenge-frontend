import { Map } from "@vis.gl/react-google-maps";
import { IMovie } from "../../types/Movies";
import GoogleMarker from "./GoogleMarker";
import { useState } from "react";
import { SAN_FRANCISCO_CENTER } from "../../constants/constants";

interface IMapProps {
  movies?: IMovie[];
}

export default function GoogleMap({ movies }: IMapProps) {
  const [openMovieView, setOpenMovieView] = useState<number | null>();

  const handleMarkerClick = (id: number) => {
    setOpenMovieView(openMovieView === id ? null : id);
  };

  return (
    <div className="h-full w-full flex items-center justify-center text-black">
      {movies && (
        <Map
          className="w-full h-full"
          defaultCenter={SAN_FRANCISCO_CENTER}
          defaultZoom={13}
          mapTypeControl={false}
          streetViewControl={false}
        >
          {movies.map((movie, i) => {
            if (typeof movie.geolocation === "string") return null;
            return (
              <GoogleMarker
                key={i}
                movie={movie}
                isOpen={openMovieView === i}
                onMarkerClick={() => handleMarkerClick(i)}
                onMarkerClose={() => setOpenMovieView(null)}
              />
            );
          })}
        </Map>
      )}
    </div>
  );
}

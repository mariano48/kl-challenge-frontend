export interface IMovie {
  title: string;
  release_year: string;
  locations: string;
  production_company: string;
  distributor: string;
  director: string;
  writer: string;
  actor_1: string;
  actor_2: string;
  actor_3: string;
  geolocation: {
    lat: number;
    lng: number;
  };
}

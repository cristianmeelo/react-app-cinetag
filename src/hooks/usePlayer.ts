import { useParams } from "react-router-dom";
import { useFetchMovies } from "./useFetchMovies";

export const usePlayer = () => {
  const { movies } = useFetchMovies();

  const params = useParams();
  const movie = movies.find((movie) => movie.id === Number(params.id));

  if (!movie) {
    return { notFound: true };
  }

  return { movie, notFound: false };
};

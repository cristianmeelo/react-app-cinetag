import { movies } from "helpers/json/db";
import { useParams } from "react-router-dom";

export const usePlayer = () => {
  const params = useParams();
  const movie = movies.find((movie) => movie.id === Number(params.id));

  if (!movie) {
    return { notFound: true };
  }

  return { movie, notFound: false };
};

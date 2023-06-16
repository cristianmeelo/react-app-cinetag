import { movies } from "helpers/json";
import { useParams } from "react-router-dom";

export const usePlayer = () => {
  const params = useParams();
  const movie = movies.find((movie) => {
    return movie.id === Number(params.id);
  });
  return { movie };
};

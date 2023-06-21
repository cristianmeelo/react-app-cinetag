import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const usePlayer = () => {
  const [movie, setMovie] = useState<IMovies>();
  const params = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/cristianmeelo/cinetag-api/movies?id=${params?.id}`)
      .then((resp) => resp.json())
      .then((data) => setMovie(data[0]));
  }, []);

  if (!movie) {
    return { notFound: true };
  }

  return { movie, notFound: false };
};

import { useEffect, useState } from "react";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/cristianmeelo/cinetag-api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return { movies };
};

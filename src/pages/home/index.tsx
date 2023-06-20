import styles from "./index.module.css";
import { Title, Banner } from "components";
import { Card } from "components/Card";
import { useFetchMovies } from "hooks";

export const Home = () => {
  const { movies } = useFetchMovies();
  return (
    <>
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para salvar seus vídeos e filmes</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie: IMovies) => {
          return <Card {...movie} key={movie.id} />;
        })}
      </section>
    </>
  );
};

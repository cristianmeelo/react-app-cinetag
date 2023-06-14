import styles from "./index.module.css";
import { Footer, Header, Title, Banner } from "components";
import { Card } from "components/Card";
import { movies } from "helpers/json";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para salvar seus vídeos e filmes</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie) => {
          return <Card {...movie} key={movie.id} />;
        })}
      </section>
      <Footer />
    </>
  );
};

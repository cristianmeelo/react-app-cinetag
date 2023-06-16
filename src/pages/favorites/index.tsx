import { Banner, Title } from "components";
import styles from "./index.module.css";
import { Card } from "components/Card";
import { useFavoriteContext } from "context/favoriteContext";

export const Favorites = () => {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Banner image="favorite" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((item: IMovies) => {
          return <Card {...item} key={item.id} />;
        })}
      </section>
    </>
  );
};

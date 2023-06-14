import { Banner, Title } from "components";
import styles from "./index.module.css";
import { Card } from "components/Card";

export const Favorites = () => {
  return (
    <>
      <Banner image="favorite" />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        <Card id={1} title={"asda"} cover={"aa"} />
      </section>
    </>
  );
};

import { Banner, Title } from "components";
import { usePlayer } from "hooks";
import styles from "./index.module.css";

export const Player = () => {
  const { movie } = usePlayer();

  return (
    <>
      <Banner image={"player"} />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe width="100%" height="100%" src={movie?.link} title={movie?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
    </>
  );
};

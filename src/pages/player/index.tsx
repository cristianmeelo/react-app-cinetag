import { Banner, Title } from "components";
import { usePlayer } from "hooks";
import styles from "./index.module.css";

export const Player = () => {
  const { movie } = usePlayer();
  console.log("%cindex.tsx line:7 mooie", "color: #26bfa5;", movie);
  return (
    <>
      <Banner image={"player"} />
      <Title>Player</Title>
      <section className={styles.container}>
        <iframe width="100%" height="100%" src={movie?.link} title={movie?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
    </>
  );
};

import styles from "./index.module.css";
import favoriteIcon from "./favorite.png";
import disfavorIcon from "./disfavor.png";

export const Card = ({ id, title, cover }: CardProps) => {
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={cover} />
      <h2>{title}</h2>
      <img src={favoriteIcon} alt="favorite movie" className={styles.favorite} />
    </div>
  );
};

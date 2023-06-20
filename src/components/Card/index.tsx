import { Link } from "react-router-dom";
import { useCard } from "hooks";
import { useFavoriteContext } from "context/favoriteContext";
import styles from "./index.module.css";

export const Card = ({ id, title, cover }: CardProps) => {
  const { addFavorite } = useFavoriteContext();
  const { checkIsFavorited } = useCard();

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={cover} alt={title} className={cover} />
        <h2>{title}</h2>
      </Link>
      <img src={checkIsFavorited(id)} alt="favorite movie" className={styles.favorite} onClick={() => addFavorite({ id, title, cover })} />
    </div>
  );
};

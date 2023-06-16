import { useCard } from "components/hooks/useCard";
import styles from "./index.module.css";

import { useFavoriteContext } from "context/favoriteContext";

export const Card = ({ id, title, cover }: CardProps) => {
  const { addFavorite } = useFavoriteContext();
  const { checkIsFavorited } = useCard();

  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={cover} />
      <h2>{title}</h2>
      <img src={checkIsFavorited(id)} alt="favorite movie" className={styles.favorite} onClick={() => addFavorite({ id, title, cover })} />
    </div>
  );
};

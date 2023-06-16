import { useFavoriteContext } from "context/favoriteContext";
import favoriteIcon from "../Card/favorite.png";
import disfavorIcon from "../Card/disfavor.png";

export const useCard = () => {
  const { favorite } = useFavoriteContext();

  const checkIsFavorited = (id: string | number) => {
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? favoriteIcon : disfavorIcon;
    return icon;
  };

  return { checkIsFavorited };
};

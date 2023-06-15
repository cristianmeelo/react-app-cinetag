import { createContext, useContext, useState } from "react";

interface FavoriteContextType {
  favorite: string[];
  setFavorite: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FavoriteContext = createContext<FavoriteContextType>({} as any);
FavoriteContext.displayName = "Favorites";

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorite, setFavorite] = useState<string[]>([]);

  const context: FavoriteContextType = {
    favorite,
    setFavorite,
  };

  return <FavoriteContext.Provider value={context}>{children}</FavoriteContext.Provider>;
};

export const useFavoriteContext = () => {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const addFavorite = (newFavorite: any) => {
    const repeatFavorite = favorite.some((item: any) => item.id === newFavorite.id);

    let newList = [...favorite];
    if (!repeatFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    newList = favorite.filter((item: any) => item.id !== newFavorite.id);
    return setFavorite(newList);
  };
  return { favorite, addFavorite };
};

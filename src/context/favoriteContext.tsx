import { createContext, useState } from "react";

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

import { FavoriteProvider } from "./favoriteContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <FavoriteProvider>{children}</FavoriteProvider>;
};

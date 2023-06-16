import styles from "./index.module.css";
import cover from "./images/banner-home.png";
import coverFavorite from "./images/banner-favorite.png";
import player from "./images/banner-player.png";

export const Banner = ({ image }: BannerProps) => {
  function changeBannerImage(image: string) {
    const imagem: { [key: string]: string } = {
      home: cover,
      favorite: coverFavorite,
      player: player,
    };
    return imagem[image];
  }

  return (
    <div className={styles.cover}>
      <img src={changeBannerImage(image)} alt="cover" />
    </div>
  );
};

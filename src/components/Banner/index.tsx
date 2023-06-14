import styles from "./index.module.css";
import cover from "./images/banner-home.png";
import cover2 from "./images/banner-home.png";

export const Banner = ({ image }: BannerProps) => {
  function changeBannerImage(image: string) {
    const imagem: { [key: string]: string } = {
      home: cover,
      home2: cover2,
    };
    return imagem[image];
  }

  return (
    <div className={styles.cover}>
      <img src={changeBannerImage(image)} alt="cover" />
    </div>
  );
};

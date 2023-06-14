import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const HeaderLink: React.FC<IHeaderLink> = ({ url, children }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
};

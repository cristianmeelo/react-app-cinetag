import { Link } from "react-router-dom";
import styles from "./index.module.css";
import logo from "../../images/logo.png";
import { HeaderLink } from "components";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="\">
        <img src={logo} alt="logo cinetag" />
      </Link>
      <nav>
        <HeaderLink url={"./"} children={"Home"} />
        <HeaderLink url={"./favorites"} children={"Favoritos"} />
      </nav>
    </header>
  );
};

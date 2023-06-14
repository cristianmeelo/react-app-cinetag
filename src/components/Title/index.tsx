import styles from "./index.module.css";

export const Title = ({ children }: TitleProps) => {
  return <div className={styles.text}>{children}</div>;
};

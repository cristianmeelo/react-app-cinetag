import styles from "./index.module.css";

export const Container = ({ children }: ContainerProps) => {
  return <section className={styles.container}>{children}</section>;
};

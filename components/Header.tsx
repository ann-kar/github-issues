import styles from "../styles/Home.module.css";

export const Header = ({ children }: { children: JSX.Element }) => {
  return <header className={styles.header}>{children}</header>;
};

import styles from "../../styles/Home.module.css";

export const ListItemInfo = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return <div className={styles.listItemInfo}>{children}</div>;
};

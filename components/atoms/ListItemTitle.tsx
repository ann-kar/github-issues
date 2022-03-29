import styles from "../../styles/Home.module.css";

export const ListItemTitle = ({ text }: { text: string }) => {
  return <h2 className={styles.listItemTitle}>{text}</h2>;
};

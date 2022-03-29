import styles from "../../styles/Home.module.css";

export const ListItemDescription = ({ text }: { text: string }) => {
  return <p className={styles.listItemSubtitle}>{text}</p>;
};

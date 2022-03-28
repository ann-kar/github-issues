import { IUser } from "../interfaces/search";
import styles from "../styles/Home.module.css";

export const User = ({ item }: { item: IUser }) => {
  return (
    <>
      <img className={styles.listItemAvatar}>{item.avatar}</img>
      <h2 className={styles.listItemTitle}>{item.name}</h2>
      <h2 className={styles.listItemTitle}>{item.username}</h2>
      <h3 className={styles.listItemLocation}>{item.location}</h3>
    </>
  );
};

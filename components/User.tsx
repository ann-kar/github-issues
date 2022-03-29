import Link from "next/link";
import { IUser } from "../interfaces/search";
import styles from "../styles/Home.module.css";

export const User = ({ item }: { item: IUser }) => {
  return (
    <>
      <img className={styles.avatarSmall} src={item.avatar}></img>
      <h2 className={styles.listItemTitle}>{item.name}</h2>
      <h2 className={styles.listItemTitle}>
        <Link
          href={{
            pathname: `/users/${item.id}`,
          }}
        >
          <a>{item.username}</a>
        </Link>
      </h2>
      <h3 className={styles.listItemLocation}>{item.location}</h3>
    </>
  );
};

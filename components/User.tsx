import Link from "next/link";

import { IUser } from "../interfaces/search";
import { ListItemTitle } from "./atoms/ListItemTitle";
import { ListItemInfo } from "./templates/ListItemInfo";
import styles from "../styles/Home.module.css";

export const User = ({ item }: { item: IUser }) => {
  return (
    <>
      <div className={styles.listItemLeft}>
        <img src={item.avatar} className={styles.listItemIcon} />
      </div>
      <div className={styles.listItemRight}>
        <ListItemTitle text={item.name} />
        <h3 className={styles.listItemDescription}>
          <Link
            href={{
              pathname: `/users/${item.id}`,
            }}
          >
            <a>{item.username}</a>
          </Link>
        </h3>
        <ListItemInfo>
          <h3 className={styles.listItemLocation}>{item.location}</h3>
        </ListItemInfo>
      </div>
    </>
  );
};

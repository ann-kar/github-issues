import { IRepository } from "../interfaces/search";
import styles from "../styles/Home.module.css";

import { Stars } from "./Stars";

export const Repository = ({item}:{item: IRepository}) => {
  const dateString = new Date(item.updatedAt).toLocaleString("en-UK", {
    weekday: undefined,
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className={styles.listItem}>
        <h2 className={styles.listItemTitle}>{item.name}</h2>
        <p className={styles.listItemDescription}>{item.description || ""}</p>
        <div className={styles.listItemInfo}>
          <Stars count={item.starsCount}/>
          <span>{item.licence || ""}</span>
          <span>Updated on: {dateString}</span>
        </div>
      </div>
    </>
  );
};

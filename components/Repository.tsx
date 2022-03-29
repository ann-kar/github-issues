import { IRepository } from "../interfaces/search";
import styles from "../styles/Home.module.css";
import { Stars } from "./Stars";
import { ListItemTitle } from "./atoms/ListItemTitle";
import { ListItemDescription } from "./atoms/ListItemDescription";
import { ListItemInfo } from "./templates/ListItemInfo";
import { UpdatedOn } from "./atoms/UpdatedOn";

export const Repository = ({ item }: { item: IRepository }) => {
  return (
    <>
      <div className={styles.listItemLeft}>
        <img className={styles.listItemIcon} src="/assets/repoIcon.svg"></img>
      </div>
      <div className={styles.listItemRight}>
        <ListItemTitle text={item.name} />
        <ListItemDescription text={item.description || ""} />
        <ListItemInfo>
          <Stars count={item.starsCount} />
          <span>{item.licence || ""}</span>
          <span>{item.dominantLanguage || ""}</span>
          <UpdatedOn date={item.updatedAt}/>
        </ListItemInfo>
      </div>
    </>
  );
};

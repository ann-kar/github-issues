import Image from "next/image";

import star from "../assets/star.svg";
import styles from "../styles/Home.module.css";

export const Stars = ({count}: {count: number}) => {
  return (
    <span className={styles.star}>
      <Image className={styles.starIcon} src={star}></Image>
      <span>{count}</span>
    </span>
  );
};

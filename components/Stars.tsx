import styles from "../styles/Home.module.css";

export const Stars = ({ count }: { count: number }) => {
  return (
    <span className={styles.star}>
      <img className={styles.starIcon} src="./assets/star.svg"></img>
      <span>{count}</span>
    </span>
  );
};

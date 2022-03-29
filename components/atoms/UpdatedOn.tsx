import styles from "../../styles/Home.module.css";

export const UpdatedOn = ({ date }: { date: Date }) => {
  const dateString = new Date(date).toLocaleString("en-UK", {
    weekday: undefined,
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return <div className={styles.updatedOn}>Updated on: {dateString}</div>;
};

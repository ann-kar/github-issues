import React from "react";
import styles from "../../styles/Home.module.css";

interface PaginationButtonProps {
  label: string;
  handlePageChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PaginationButton = ({
  label,
  handlePageChange,
}: PaginationButtonProps) => {
  return (
    <button
      id={label}
      className={styles.paginationBtn}
      onClick={handlePageChange}
    >
      {label.charAt(0).toUpperCase() + label.substring(1)}
    </button>
  );
};

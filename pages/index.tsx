import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IRepository } from "../interfaces/search";
import styles from "../styles/Home.module.css";
import { MockSearch } from "../test/mockSearch";

const Home: NextPage = () => {
  const [data, setData] = useState<IRepository[]>();
  const [resultCount, setResultCount] = useState<number>(10);

  useEffect(() => {
    if (!data) {
      new MockSearch().search({}).then((res) => setData(res.items));
    }
  }, [data]);

  const displayResults = () => {
    return (
      data &&
      data.map((item: IRepository) => {
        const dateString = item.updatedAt.toLocaleString("en-UK", {
          weekday: undefined,
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        return (
          <div className={styles.listItem}>
            <h2 className={styles.listItemTitle}>{item.name}</h2>
            <p className={styles.listItemDescription}>
              {item.description || ""}
            </p>
            <div className={styles.listItemInfo}>
              <span>{item.starsCount}</span>
              <span>{item.licence || ""}</span>
              <span>Updated on: {dateString}</span>
            </div>
          </div>
        );
      })
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Github search</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header className={styles.header}>
      <form>
      <input id="query" className={styles.queryInput} name="query" type="text" placeholder="Search" required />
      </form>
      </header>
      <main className={styles.main}>
        <div className={styles.resultsCount}>{resultCount} results</div>
        <div className={styles.resultList}>{displayResults()}</div>
      </main>
    </div>
  );
};

export default Home;

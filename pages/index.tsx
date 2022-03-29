import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Search } from "../api/search";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Repository } from "../components/Repository";
import { User } from "../components/User";
import { IRepository, IUser, SearchResultType } from "../interfaces/search";
import styles from "../styles/Home.module.css";

interface Metadata {
  totalCount: number;
  page: number;
  perPage: number;
}

const Home: NextPage = () => {
  const [data, setData] = useState<Array<IRepository | IUser>>();
  const [metadata, setMetadata] = useState<Metadata>();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    new Search().search({ query: query }).then((res) => {
      setData(res.items);
      setMetadata(res.metadata);
    });
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handlePageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLButtonElement;

    if (metadata) {
      const metadataCopy = { ...metadata };

      if (target.id === "prev") {
        if (metadataCopy.page <= 1) {
          target.disabled = true;
        } else {
          target.disabled = false;
          metadataCopy.page = metadataCopy.page - 1;
          setMetadata(metadataCopy);
        }
      }
    }
  };

  const displayResults = () => {
    return (
      data &&
      data.map((item) => {
        return (
          <div className={styles.listItem} key={`list-${item.id}`}>
            {item.type === SearchResultType.User ? (
              <User item={item} key={`user-${item.id}`} />
            ) : (
              <Repository item={item} key={`repo-${item.id}`} />
            )}
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
      <Header>
        <Input
          id="query"
          name="query"
          type="text"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </Header>
      <main className={styles.main}>
        {metadata && (
          <div className={styles.resultsCount}>
            {metadata?.totalCount} results
          </div>
        )}
        <div className={styles.resultList}>{displayResults()}</div>
        <div className={styles.pagination}>
          <button
            id="prev"
            className={styles.paginationBtn}
            onClick={(e) => handlePageChange(e)}
          >
            Prev
          </button>
          <button
            id="next"
            className={styles.paginationBtn}
            onClick={(e) => handlePageChange(e)}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;

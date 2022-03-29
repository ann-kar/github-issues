import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { IUserSearchResponse } from "../../interfaces/search";
import styles from "../../styles/Home.module.css";
import { MockSearch } from "../../test/mockSearch";

const UserPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUserSearchResponse>();
  useEffect(() => {
    new MockSearch().user({ userId: Number(router.query.id) }).then((res) => {
      setUserData(res);
    });
  })
  return (
    <>
      <Header/>
        {userData && (
          <div className={`${styles.userData} ${styles.container}`}>
            <img className={styles.avatar} src={userData.avatar}></img>
            <h2 className={styles.title}>{userData.displayName}</h2>
            <h2 className={styles.username}>{userData.username}</h2>
            <div className={styles.userInfo}>
              <span>{userData.followers} Followers</span>
              <span>{userData.following} Following</span>
              <Stars count={userData.starsCount}/>
            </div>
          </div>
        )}
    </>
  );
};
export default UserPage;

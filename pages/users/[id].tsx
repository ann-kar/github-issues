import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import styles from "../../styles/Home.module.css";

interface IUserDetails {
  avatar: string;
  name: string;
  username: string;
  followers: number;
  following: number;
  starsCount: number;
}

const UserPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUserDetails>({
    avatar:
      "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
    name: "sample name",
    username: "sample username",
    followers: 23,
    following: 222,
    starsCount: 2,
  });

  return (
    <>
      <Header/>
        {userData && (
          <div className={`${styles.userData} ${styles.container}`}>
            <img className={styles.avatar} src={userData.avatar}></img>
            <h2 className={styles.title}>{userData.name}</h2>
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

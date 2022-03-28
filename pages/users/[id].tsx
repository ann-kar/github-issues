import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

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
  console.log(router.query.id);
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
    <div>
      {userData && (
        <>
          <img className={styles.avatar} src={userData.avatar}></img>
          <h2>{userData.name}</h2>
          <h2 className={styles.username}>{userData.username}</h2>
          <div>
            <span>{userData.followers}</span>
            <span>{userData.following}</span>
            <span>{userData.starsCount}</span>
          </div>
        </>
      )}
    </div>
  );
};
export default UserPage;
import Link from "next/link";
import styles from "../styles/landingNavbar.module.css";
const LandingNavbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <a>
          <div className={styles.rightLink}>Our products</div>
        </a>
        <a>
          <div className={styles.rightLink}>About</div>
        </a>
        <a>
          <div className={styles.rightLink}>Contact Us</div>
        </a>
        <a href="\main">
          <div className={styles.rightBtn}>Get Started!</div>
        </a>
      </div>
    </div>
  );
};

export default LandingNavbar;

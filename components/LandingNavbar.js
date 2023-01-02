import Image from "next/image";
import Link from "next/link";
import styles from "../styles/landingNavbar.module.css";
const LandingNavbar = props => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>

			</div>
			<div className={styles.right}>
				<div className={styles.rightLink}>Our products</div>

				<div className={styles.rightLink}>About</div>

				<div className={styles.rightLink}>Contact Us</div>

				<div className={styles.rightBtn}>Try Now !</div>
			</div>
		</div>
	); 
}

export default LandingNavbar;

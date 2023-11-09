import styles from "./Banner.module.css";
import BackgroundImage from "../../image/Banner.png";
const Banner = () => {
  return (
    <>
      <div className={styles.bottom}>
        <p>Discover new things on SuperApp</p>
      </div>
      <img src={BackgroundImage}  alt="Banner"/>
    </>
  );
};

export default Banner;
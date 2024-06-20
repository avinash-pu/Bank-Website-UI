import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Experience Avikshi Bank Today!</h2>
      <p className={`${styles.paragraph} max-w-[970px] mt-5`}>
        Discover the ultimate banking experience with Avikshi Bank. From seamless transactions to comprehensive financial tools, 
        we provide everything you need to manage your finances effectively and grow your wealth.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;

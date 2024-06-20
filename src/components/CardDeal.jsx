import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover the Best Card Deals <br className="sm:block hidden" /> in Just a Few Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Avikshi Bank, we offer exclusive card deals tailored to your needs. 
        Whether you're looking for rewards, low interest rates, or premium benefits, 
        finding the perfect card has never been easier.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card deals" className="w-[100%] h-[100%] rounded-[20px]" />
    </div>
  </section>
);

export default CardDeal;

import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your billing &
        invoicing <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        At Avikshi Bank, we provide you with the tools to seamlessly manage your finances. 
        Enjoy the convenience of monitoring your transactions, paying bills, and transferring money 
        with just a few clicks. Our platform ensures you have full control over your financial 
        activities, making your banking experience smoother and more efficient.
      </p>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        Whether you're paying for utilities, sending money to friends and family, 
        or managing your savings, Avikshi Bank's user-friendly interface and advanced 
        security features ensure your transactions are safe and hassle-free. 
        Experience the future of banking with us.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;

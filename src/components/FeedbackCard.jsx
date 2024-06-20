import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-6 py-8 rounded-[20px] max-w-[400px] my-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
    <img src={quotes} alt="double_quotes" className="w-[30px] h-[20px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-6">
      {content}
    </p>

    <div className="flex flex-row items-center">
      <img src={img} alt={name} className="w-[55px] h-[50px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;

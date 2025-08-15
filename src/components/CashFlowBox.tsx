interface Props {
  amount: string;
  textColor: string;
  img: string;
  text: string;
  percentageColor?: string;
}
const CashFlowBox = ({
  textColor,
  img,
  text,
  percentageColor,
  amount,
}: Props) => {
  return (
    <div className="border border-[#E4E4E4] rounded-xl p-6 md:py-[13px] md:px-4 gap-2 flex flex-col">
      <p className={`font-semibold text-sm xl:text-xl ${textColor}`}>
        {amount}
      </p>
      <p className="flex items-center gap-2 text-[10px]">
        <span className="text-[#3D3D3D] font-medium">{text}</span>
        <span className="flex items-center gap-[5px]">
          <img src={img} alt="cash-flow" />
          <span className={percentageColor ? percentageColor : textColor}>
            2.5%
          </span>
        </span>
      </p>
    </div>
  );
};

export default CashFlowBox;

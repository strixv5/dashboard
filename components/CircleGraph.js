import RoundBorderGraph from "./RoundBorderGraph";
import RoundFilledGraph from "./RoundFilledGraph";

export default function CircleGraph({ isDemagraphic, title, data }) {
  return (
    <div className="h-[360px] min-w-[390px] flex-1 rounded-lg shadow-[4px_4px_8px_rgb(0_0_0_/_0.1)] p-4 flex items-center justify-between flex-col bg-white">
      <div className="flex w-full items-center justify-between text-base font-[600]">
        {title}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
            fill="#1A1D21"
          />
        </svg>
      </div>
      {/* Pass down data for chart here in component */}
      {
         isDemagraphic ? <RoundFilledGraph/>: <RoundBorderGraph/>
      }
      <div className="flex flex-wrap w-full items-center justify-between gap-2 font-[600] text-sm">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={`text-[${item.color}]`}
            >
              {item.label + ": " + item.value}
            </div>
          ))}
      </div>
    </div>
  );
}

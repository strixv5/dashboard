export default function ActivityGraph() {
  return (
    <div className="flex flex-2 flex-col w-full font-[600] p-4 gap-3 h-[360px] shadow-[4px_4px_8px_rgb(0_0_0_/_0.1)] rounded-lg bg-white">
      <div className="flex w-full items-center justify-between text-base font-[600]">
        Follower Activity
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
      <div className="flex w-full items-center justify-between gap-4 md:flex-row flex-col-reverse">
        <ul className="flex gap-4">
          <li className="text-[#4285F4]">Total Followers</li>
          <li className="text-[#0F9D58]">Follows</li>
          <li className="text-[#DB4437]">Un-Follows</li>
        </ul>
        <ul className="flex gap-4 [&>*]:p-[2px_10px]">
          <li className="border-b-[2px] border-b-black">Day</li>
          <li>Week</li>
          <li>Month</li>
          <li>Year</li>
        </ul>
      </div>
      <div className="flex flex-1 items-center justify-center">
         Graph
      </div>
    </div>
  );
}

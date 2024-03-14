import ActivityGraph from "@/components/ActivityGraph";
import CircleGraph from "@/components/CircleGraph";

const GraphData = {
  userReached: {
    title: "Users Reached",
    isDemagraphic: false,
    data: [
      {
        label: "Followers",
        color: "#4285F4",
        value: "XYZ",
      },
      {
        label: "Non-Followers",
        color: "#F0B03D",
        value: "XYZ",
      },
    ],
  },
  accountEngagement: {
    title: "Account Engagement",
    isDemagraphic: false,
    data: [
      {
        label: "Followers",
        color: "#4285F4",
        value: "XYZ",
      },
      {
        label: "Non-Followers",
        color: "#F0B03D",
        value: "XYZ",
      },
    ],
  },
  followersDemographics: {
    title: "Followers Demographics",
    isDemagraphic: true,
    data: [
      {
        label: "Male",
        color: "#4285F4",
        value: "XYZ",
      },
      {
        label: "Female",
        color: "#F0B03D",
        value: "XYZ",
      },
      {
        label: "Non-binary",
        color: "#0F9D58",
        value: "XYZ",
      },
      {
        label: "No Information",
        color: "#DB4437",
        value: "XYZ",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <header>
        <ul
          className="bg-[#FFF4DF] text-4 font-[600] w-full flex items-center justify-between px-[60px] py-2
     [&>*]:h-[38px] [&>*]:p-[5px_20px] [&>*]:rounded-[4px] [&>*]:border-b-black"
        >
          <li className="border-b-[4px]">Followers</li>
          <li>Events</li>
          <li>Collections</li>
          <li>Finances</li>
        </ul>
      </header>
      <main className="flex gap-6 h-max flex-row flex-wrap p-[30px]">
        <CircleGraph {...GraphData.userReached} />
        <CircleGraph {...GraphData.accountEngagement} />
        <CircleGraph {...GraphData.followersDemographics}/>
        <ActivityGraph />
      </main>
    </>
  );
}

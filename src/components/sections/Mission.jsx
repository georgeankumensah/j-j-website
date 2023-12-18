import React from "react";
import visionIcon from "../../assets/vision.png";
import missionIcon from "../../assets/mission.png";

const data = [
  {
    id: 1,
    title: "vision",
    description:
      "Creating pristine spaces that inspire well-being, J&Y Cleaning aims to be the premier provider  of meticulous and eco-friendly cleaning solutions, setting the standard for cleanliness and customer satisfaction.",
    icon: visionIcon,
  },
  {
    id: 1,
    title: "mission",
    description:
      "At J&Y Cleaning, our mission is to deliver unparalleled cleaning services with a commitment to environmental sustainability.  We strive to exceed customer expectations through dedicated professionals, innovative  cleaning practices, and a relentless pursuit of  excellence in every space we touch.",
    icon: missionIcon,
  },
];

const MissionCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-[0.625rem]">
      <img
        src={item.icon}
        alt="icon"
        className="h-[4.75rem] w-[5.75rem] aspect-square "
      />
      <h2 className="text-[#800080] text-4xl not-italic font-bold leading-[normal] default-font capitalize">
        {item.title} :
      </h2>
      <p className=" text-[#1E1E1E] text-lg not-italic font-normal leading-7 default-font">
        {item.description}
      </p>
    </div>
  );
};

const Mission = () => {
  return (
    <div className="bg-[#E3E7FD] w-full flex p-[8.25rem] gap-[9.69rem]">
      {data.map((item) => (
        <MissionCard item={item} />
      ))}
    </div>
  );
};

export default Mission;

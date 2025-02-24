
import { BsExclamationTriangle } from "react-icons/bs";

import { FaArrowsSpin } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuUsers } from "react-icons/lu";

import StatCard from "./StatCard";


const stats = [
  { title: "Total Projects", count: 5, icon: <GrProjects />, color: "text-teal-300", bgColor: "bg-white" },
  { title: "Completed", count: 1, icon: <IoMdCheckmarkCircleOutline />, color: "text-teal-300", bgColor: "bg-white" },
  { title: "Ongoing", count: 3, icon: <FaArrowsSpin />, color: "text-teal-300", bgColor: "bg-white" },
  { title: "Delayed", count: 1, icon: <BsExclamationTriangle />, color: "text-red-500", bgColor: "bg-rose-300" },
  { title: "Employees", count: 5, icon: <LuUsers />, color: "text-teal-300", bgColor: "bg-white" },
];

const StatsCards = () => {
  return (
    <div className="flex justify-between">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;

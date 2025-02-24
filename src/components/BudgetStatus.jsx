import { IoMdAdd } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

const projects = [
    {
      name: "Insurance App",
      company: "Verit",
      totalBudget: "70,000€",
      profitability: "-2,500€",
      actualHours: "1,100",
      status: "Over Budget",
      statusColor: "text-red-500",
      progress: "80%",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      progressBarColor:"bg-red-500"
    },
    {
      name: "Neo",
      company: "Bankia",
      totalBudget: "70,000€",
      profitability: "4,000€",
      actualHours: "1,100",
      status: "On Budget",
      statusColor: "text-yellow-500",
      progress: "60%",
      image: "https://randomuser.me/api/portraits/men/82.jpg",
      progressBarColor:"bg-yellow-600"
    },
    {
      name: "VR Website",
      company: "Barça",
      totalBudget: "70,000€",
      profitability: "4,000€",
      actualHours: "2,000",
      status: "Under Budget",
      statusColor: "text-green-500",
      progress: "100%",
      image: "https://randomuser.me/api/portraits/men/83.jpg",
      progressBarColor:"bg-teal-700"
    },
    {
        name: "VR Website",
        company: "Barça",
        totalBudget: "70,000€",
        profitability: "4,000€",
        actualHours: "2,000",
        status: "Under Budget",
        statusColor: "text-green-500",
        progress: "100%",
        image: "https://randomuser.me/api/portraits/men/83.jpg",
        progressBarColor:"bg-teal-700"
      }
  ];
  
  const BudgetStatus = () => {
    return (
      <div className="py-4 w-full">
        <div className="flex items-center mb-4 space-x-2">
          <h2 className="text-2xl font-semibold text-gray-700">Budget Status</h2>
          <div className="flex space-x-2">
            <button className="bg-teal-700 text-white px-4 py-1 rounded flex items-center"><IoMdAdd className="mr-2" />Add New Project</button>
            <button className="border px-4 py-1 rounded flex items-center text-teal-700"> <MdOutlineFileDownload className="mr-2"/> Download Report</button>
            <input type="date" className="border px-2 rounded text-teal-700" />
            <button className="border px-4 py-1 rounded flex items-center text-teal-700"> <IoFilter className="mr-2"/>Filter</button>
          </div>
        </div>
        <div className="flex justify-between gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow w-full bg-white relative">
            {/* Top Right Image */}
            <img
              className="w-10 h-10 rounded-full absolute top-4 right-4"
              src={project.image}
              alt={project.name}
            />
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-gray-500 text-sm">{project.company}</p>
            <p className="text-gray-600 mt-2">Total Budget: <strong>{project.totalBudget}</strong></p>
            <p className={`mt-1 ${project.statusColor}`}>Profitability: <strong>{project.profitability}</strong></p>
            <p className="text-gray-600 mt-1">Actual Hours: {project.actualHours}</p>

            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-300 rounded-full mt-2">
              <div
                className={`h-2 ${project.progressBarColor} rounded-full`}
                style={{ width: project.progress }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      </div>
    );
  };
  
  export default BudgetStatus;
  
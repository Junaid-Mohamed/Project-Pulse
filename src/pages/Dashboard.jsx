import BudgetPieChart from "../components/BudgetChart"
import BudgetStatus from "../components/BudgetStatus"
import RevenueChart from "../components/RevenueChart"
import StatsCards from "../components/StatusCards"
import TeamMood from "../components/TeamMood"


function Dashboard() {
  return (
<div className="bg-gray-100 min-h-screen">
    <div className="grid grid-cols-6 gap-4 p-8 pb-0" >
    <div className="col-span-5">
      <StatsCards />
      </div>
      <div className="row-span-2" >
      <TeamMood/>
      </div>
      <div className="col-span-3" >
      <RevenueChart/>
      </div>
      <div className="col-span-2" >
      <BudgetPieChart/>
      </div>
      </div>
      <div className="p-8 pt-4">
      <BudgetStatus/>
      </div>
    </div>

  )
}

export default Dashboard

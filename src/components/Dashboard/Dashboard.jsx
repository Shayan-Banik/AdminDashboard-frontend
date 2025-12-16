import GridCard from './GridCard'
import Chart from './Chart'
import TableSection from './TableSection'
import Activity from './Activity'


const Dashboard = () => {
  return (
    <div className='space-y-6'>
        <GridCard />
        <Chart />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <TableSection />
          </div>
          <div className="">
            <Activity />
          </div>
        </div>
    </div>
  )
}

export default Dashboard
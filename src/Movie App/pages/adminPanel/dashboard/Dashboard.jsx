import { useGetDashBoadrdDataInAdminPanelQuery } from "../../../redux/services/movieDatabase";
import MovieChart from "../../../components/admin/adminDashboard/movieChart";
import DashboardItemNum from "../../../components/admin/adminDashboard/DashboardItemNum";
import UserChart from "../../../components/admin/adminDashboard/UserChart";
const Dashboard = () => {
  const getDashBoadrdDataInAdminPanelQuery =
    useGetDashBoadrdDataInAdminPanelQuery();

  return (
    <div className="dark:text-white mt-14 px-3 sm:px-7  md:px-14">
      <div className="">
        <div className="mb-10">
          <DashboardItemNum data={getDashBoadrdDataInAdminPanelQuery} />
        </div>
        <div className="flex w-full flex-col lg:flex-row justify-between ">
          <UserChart data={getDashBoadrdDataInAdminPanelQuery} />
          <div className="lg:max-w-[40vw] mt-9 lg:mt-0 justify-between min-w-[40vw] flex flex-col ">
            <MovieChart data={getDashBoadrdDataInAdminPanelQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

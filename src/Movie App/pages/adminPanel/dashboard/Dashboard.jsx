import { useGetDashBoadrdDataInAdminPanelQuery } from "../../../redux/services/movieDatabase";
import MovieChart from "../../../components/admin/adminDashboard/movieChart";
import DashboardItemNum from "../../../components/admin/adminDashboard/DashboardItemNum";
import UserChart from "../../../components/admin/adminDashboard/UserChart";
const Dashboard = () => {
  const getDashBoadrdDataInAdminPanelQuery =
    useGetDashBoadrdDataInAdminPanelQuery();

  return (
    <div className="dark:text-white mt-14 px-3 sm:px-7  md:px-10">
      <div className="">
        <div className="mb-10">
          <DashboardItemNum data={getDashBoadrdDataInAdminPanelQuery} />
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row justify-between ">
          <UserChart data={getDashBoadrdDataInAdminPanelQuery} />
          <MovieChart data={getDashBoadrdDataInAdminPanelQuery} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

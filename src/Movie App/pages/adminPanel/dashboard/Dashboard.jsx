import { useGetDashBoadrdDataInAdminPanelQuery } from "../../../redux/services/movieDatabase";
import MovieChart from "../../../components/admin/adminDashboard/movieChart";
import DashboardItemNum from "../../../components/admin/adminDashboard/DashboardItemNum";
import UserChart from "../../../components/admin/adminDashboard/UserChart";
import DownloadCount from "../../../components/admin/adminDashboard/downladCount";
const Dashboard = () => {
  const getDashBoadrdDataInAdminPanelQuery =
    useGetDashBoadrdDataInAdminPanelQuery();

  return (
    <div className="dark:text-white min-h-screen pb-36 mt-14 px-3 sm:px-7  md:px-10">
      <div className="">
        <div className="mb-10">
          <DashboardItemNum data={getDashBoadrdDataInAdminPanelQuery} />
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row justify-between ">
          <UserChart data={getDashBoadrdDataInAdminPanelQuery} />
          <MovieChart data={getDashBoadrdDataInAdminPanelQuery} />
        </div>
        <div className="mt-3">
          <DownloadCount data={getDashBoadrdDataInAdminPanelQuery} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

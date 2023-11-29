import { withRouter } from "react-router-dom";
import AdminSideBarItems from "./AdminSideBarItems";
const AdminSideBarList = ({ items, menu }) => {
  return (
    <div>
      <div
        className={` flex flex-col mt-2 border-r-2 dark:border-border h-[500px]  `}
      >
        <ul className={`w-full`}>
          {items.map((item, index) => (
            <AdminSideBarItems key={index} item={item} menu={menu} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(AdminSideBarList);

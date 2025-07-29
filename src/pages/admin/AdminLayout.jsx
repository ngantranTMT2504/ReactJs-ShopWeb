import { Outlet } from "react-router";
import NavBarAdmin from "../../components/NavBarAdmin";
import SideBarAdmin from "../../components/SideBarAdmin";
import FooterAdmin from "../../components/FooterAdmin";

export const AdminLayout = () => {
  return (
    <>
    <div className="w-100">
      <div className="d-flex ">
        <SideBarAdmin />
        <div className="w-100 content-right">
          <NavBarAdmin />
          <Outlet />
          <FooterAdmin />
        </div>
      </div>

    </div>
    </>
  );
};

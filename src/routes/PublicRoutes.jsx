import { Navigate, Outlet } from "react-router-dom";
import AppNavbar from "../compponents/AppNavbar";
import AppFooter from "../compponents/AppFooter";
import AppSidebar from "../compponents/AppSidebar";

const PublicRoutes = () => {
  return (
    <>
       {/* <Navigate to="/" replace={true} /> */}
      <AppNavbar />
      <AppSidebar />
      <Outlet />
      <AppFooter />
    </>
  );
};
export default PublicRoutes;

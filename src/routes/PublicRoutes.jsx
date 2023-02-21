import { Navigate, Outlet } from "react-router-dom";
import AppNavbar from "../compponents/AppNavbar";
import AppFooter from "../compponents/AppFooter";
import AppSidebar from "../compponents/AppSidebar";

const PublicRoutes = () => {
  return (
    <>
      {/* <Navigate to="/" replace={true} /> */}
      <AppNavbar />
      <div className="container-fluid">
        <div className="row">
          <AppSidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
      <AppFooter />
    </>
  );
};
export default PublicRoutes;

import { NavLink } from "react-router-dom";
function AppSidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <i className="bi bi-speedometer2 align-text-bottom"></i> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="posts" className="nav-link">
              <i className="bi bi-file-earmark-fill align-text-bottom"></i> Post
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default AppSidebar;

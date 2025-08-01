import { Link, useLocation } from "react-router";

const SideBarAdmin = () => {
  const location = useLocation();

  return (
    <div className="sidebar-admin ">
      <nav className="sidebar d-flex flex-column">
        <div className="logo">
           <i className="bi bi-book-half me-2"></i>
            Bookshell
        </div>
        <Link to="/admin/dashboard" className={location.pathname === "/admin/dashboard" ? "active" : ""}>
          <i class="bi bi-house-door me-2"></i> Dashboard
        </Link>
        <Link to="/admin/user-management"  className={location.pathname.startsWith("/admin/user-management") ? "active" : ""}>
          <i className="bi bi-people me-2"></i> Users
        </Link>
        <Link to="/admin/category" className={location.pathname.startsWith("/admin/category") ? "active" : ""}>
          <i className="bi bi-people me-2"></i>Category
        </Link>
        <a href="#">
          <i className="bi bi-book me-2"></i> Books
        </a>
        <a href="#">
          <i className="bi bi-receipt me-2"></i> Orders
        </a>
        <a href="#">
          <i className="bi bi-bar-chart me-2"></i> Reports
        </a>
        <a href="#">
          <i className="bi bi-gear me-2"></i> Settings
        </a>
        <a href="#" className="mt-auto">
          <i className="bi bi-box-arrow-right me-2"></i> Logout
        </a>
      </nav>
    </div>
    
  );
};

export default SideBarAdmin;

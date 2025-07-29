import React from "react";

const NavBarAdmin = () => {
  return (
    <div className="navbar-admin shadow p-1">
      <ul className="d-flex justify-content-end px-5 algn-item-center">
        <li className="list-unstyled me-4 mt-2">
          <a href="#" className="text-white">
            <i class="bi bi-bell fs-5"></i>
          </a>
        </li>
        <li className="list-unstyled me-5 mt-2">
          <a href="#" className="text-white">
            <i class="bi bi-envelope fs-5"></i>
          </a>
        </li>
        <li className="list-unstyled">
          <i class="bi bi-person-circle fs-2"></i>
        </li>
      </ul>
    </div>
  );
};

export default NavBarAdmin;

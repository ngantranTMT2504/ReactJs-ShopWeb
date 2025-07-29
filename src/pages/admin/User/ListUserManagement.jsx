import React from "react";

const ListUserManagement = () => {
  const allUser = 100;
  return (
    <div className="m-3">
      <h4>User Management</h4>
      <p className="text-secondary">Manage users and their permissions</p>
      <hr></hr>
      <div className="d-flex justify-content-between my-3">
        <h5>
          All Users <span className="text-secondary fw-bold">{allUser}</span>
        </h5>
        <div>
        <input className="p-2 me-3" placeholder="Search"></input>
        <button className="btn-custom py-2 px-4">
          <i class="bi bi-sort-alpha-down"></i>
          Filter
        </button>

        </div>
      </div>
      <div className="my-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John</td>
              <td>Doe</td>
              <td>@social</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUserManagement;

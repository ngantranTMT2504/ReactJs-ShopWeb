import { useEffect, useState } from "react";
import axios from "axios";
import { TableCustom } from "../../../components/Admin/TableCustom";
import { PaginationCustom } from "../../../components/Admin/PaginationCustom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ListCategoryManagement = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate(); 

  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" }
  ];

 const fetchData = () => {
    console.log(`Page: ${page}`);
    axios
      .get(`http://localhost:8080/api/v1/categories/all?page=${page}&size=5`)
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching categories", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleEdit = (id) => {
    navigate(`/admin/category/update/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      axios.delete(`http://localhost:8080/categories/${id}`).then(() => {
        fetchData();
      });
    }
  };

  return (
    <div className="m-3">
      <h4>Category Management</h4>
      <p className="text-secondary">Manage category and their permissions</p>
      <hr></hr>
      <Link to="/admin/category/create" className="btn-custom py-2 px-4 mb-3 text-decoration-none">
        <i class="bi bi-clipboard-plus me-2"></i>
        Add Category
      </Link>

      <div className="d-flex justify-content-end my-3">
        <div>
          <input className="p-2 me-3" placeholder="Search"></input>
          <button className="btn-custom py-2 px-4">
            <i class="bi bi-sort-alpha-down"></i>
            Filter
          </button>
        </div>
      </div>

      <div className="">
        <TableCustom 
        data={data} 
        columns={columns} 
        onEdit={handleEdit}
        onDelete={handleDelete}>
        </TableCustom>
        <div className="d-flex justify-content-center">
          <PaginationCustom
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          ></PaginationCustom>
        </div>
      </div>
    </div>
  );
};

export default ListCategoryManagement;

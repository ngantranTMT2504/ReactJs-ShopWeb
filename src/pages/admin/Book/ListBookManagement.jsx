import { useEffect, useState } from "react";
import axios from "axios";
import { TableCustom } from "../../../components/Admin/TableCustom";
import { PaginationCustom } from "../../../components/Admin/PaginationCustom";
import { useNavigate, Link } from "react-router-dom";

const ListBookManagement = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate(); 

  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "price", title: "Price" },
    { key: "inventory", title: "Inventory" },
    { key: "importDate", title: "Import Date" },
    { key: "category.name", title: "Category" },
    { key: "author.name", title: "Author" }
  ];

  const fetchData = () => {
    axios.get(`http://localhost:8080/api/v1/books/all?page=${page}&size=5`)
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching books", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleEdit = (id) => {
    navigate(`/admin/book/update/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      axios.delete(`http://localhost:8080/api/v1/books/${id}`).then(() => {
        fetchData();
      });
    }
  };

  return (
    <div className="m-3">
      <h4>Book Management</h4>
      <p className="text-secondary">Manage book</p>
      <hr />
      <Link to="/admin/book/create" className="btn-custom py-2 px-4 mb-3 text-decoration-none">
        <i className="bi bi-clipboard-plus me-2"></i>
        Add Book
      </Link>

      <div className="d-flex justify-content-end my-3">
        <div>
          <input className="p-2 me-3" placeholder="Search" />
          <button className="btn-custom py-2 px-4">
            <i className="bi bi-sort-alpha-down"></i>
            Filter
          </button>
        </div>
      </div>

      <div>
        <TableCustom 
          data={data} 
          columns={columns} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <div className="d-flex justify-content-center">
          <PaginationCustom
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ListBookManagement;

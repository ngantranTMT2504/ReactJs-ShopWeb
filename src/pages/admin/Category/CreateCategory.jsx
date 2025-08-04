import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateAuthorManagement = () => {
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/categories/add",
        {
          name : category
        }
      );
      console.log(response);
      alert("Created successfully");
      navigate("/admin/category/list");
    } catch (err) {
      alert("Create failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="p-5">
      <h4 className="text-center mb-3">Create Category</h4>
      <div className="d-flex justify-content-center w-100">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control w-100"
              id="category"
              required
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn-custom py-2 px-4">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAuthorManagement;

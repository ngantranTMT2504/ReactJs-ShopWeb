import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/categories/category/${id}`)
      .then(response => {
        setCategory(response.data.data.name);
        console.log(response.data.data.name);
      })
      .catch(error => {
        console.error("Error fetching category:", error);
        alert("Failed to load category");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:8080/api/v1/categories/category/${id}`, {
      name: category
    })
    .then(response => {
      console.log(response)
      alert("Category updated successfully!");
      navigate('/admin/category/list');
    })
    .catch(error => {
      console.error("Update error:", error);
      alert("Update failed");
    });
  };

  return (
    <div className="p-5">
      <h4 className="text-center mb-3">Update Category</h4>
      <div className="d-flex justify-content-center w-100">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name Category</label>
            <input
              type="text"
              value={category||''}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control w-100"
              id="category"
              required
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn-custom py-2 px-4">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;

// AddBookForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddBookForm = () => {
  const navigate = useNavigate(); 
  const [book, setBook] = useState({
    name: "",
    price: "",
    inventory: "",
    description: "",
    importDate: "",
    category: { id: "", name: "" },
    author: { id: "", name: "" },
  });

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, authRes] = await Promise.all([
          axios.get("http://localhost:8080/api/v1/categories/all"),
          axios.get("http://localhost:8080/api/v1/authors/all"),
        ]);
        setCategories(catRes.data.data || []);
        setAuthors(authRes.data || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        alert("Failed to fetch category or author data");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedId = e.target.value;
    const selectedCategory = categories.find((cat) => cat.id === selectedId);
    setBook((prev) => ({
      ...prev,
      category: {
        id: selectedId,
        name: selectedCategory?.name || "",
      },
    }));
  };

  const handleAuthorChange = (e) => {
    const selectedId = e.target.value;
    const selectedAuthor = authors.find((auth) => auth.id === selectedId);
    setBook((prev) => ({
      ...prev,
      author: {
        id: selectedId,
        name: selectedAuthor?.name || "",
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/books/add",
        book
      );
      console.log(response.data);
      alert("Book added successfully!");
      navigate("/admin/book/list");
      // Reset form
      setBook({
        name: "",
        price: "",
        inventory: "",
        description: "",
        importDate: "",
        category: { id: "", name: "" },
        author: { id: "", name: "" },
      });
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="p-5 mb-5">
      <h4 className="text-center">Add New Book</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={book.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            className="form-control"
            name="price"
            type="number"
            value={book.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Inventory</label>
          <input
            className="form-control"
            name="inventory"
            type="number"
            value={book.inventory}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Import Date</label>
          <input
            className="form-control"
            type="date"
            name="importDate"
            value={book.importDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <select
            className="form-control"
            name="category"
            value={book.category.id}
            onChange={handleCategoryChange}
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Author</label>
          <select
            className="form-control"
            name="author"
            value={book.author.id}
            onChange={handleAuthorChange}
            required
          >
            <option value="">-- Select Author --</option>
            {authors.map((auth) => (
              <option key={auth.id} value={auth.id}>
                {auth.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn-custom py-2 px-4 mb-5" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;

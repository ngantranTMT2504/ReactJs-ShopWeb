import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/customer/Home";
import { About } from "./pages/customer/About";
import Contact from "./pages/customer/Contact";
import { CustomLayout } from "./pages/customer/CustomLayout";
import { Books } from "./pages/customer/Books";
import { BookDetail } from "./pages/customer/BookDetail";
import { Cart } from "./pages/customer/Cart";
import { AdminLayout } from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ListUserManagement from "./pages/admin/User/ListUserManagement";
import CategoryLayout from "./pages/admin/Category/CategoryLayout";
import ListCategory from "./pages/admin/Category/ListCategory"
import UpdateCategory from "./pages/admin/Category/UpdateCategory"
import CreateCategory from "./pages/admin/Category/CreateCategory"

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<CustomLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/" element={<CustomLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="contact" element={<Contact />} />
        <Route path="detail-book" element={<BookDetail />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user-management" element={<ListUserManagement />} />
         <Route path="category" element={<CategoryLayout />}>
            <Route index element={<Navigate to="list" replace />} />
            <Route path="list" element={<ListCategory />} />
            <Route path="create" element={<CreateCategory />} />
            <Route path="update" element={<UpdateCategory />} />
          </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Home from "./pages/customer/Home";
import { About } from "./pages/customer/About";
import Contact from "./pages/customer/Contact";
import { CustomLayout } from "./pages/customer/CustomLayout";
import { Books } from "./pages/customer/Books";
import { BookDetail } from "./pages/customer/BookDetail";
import { Cart } from "./pages/customer/Cart";
import Register from "./pages/customer/Register";
import Login from "./pages/customer/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="contact" element={<Contact />} />
        <Route path="detail-book" element={<BookDetail/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
    </Routes>
  );
}

export default App;

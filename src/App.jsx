import { Route, Routes } from "react-router";
import Home from "./pages/customer/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

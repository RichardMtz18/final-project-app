import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import  Movies  from "../components/Movies";
import  Reviews  from "../components/Reviews";

export function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
}

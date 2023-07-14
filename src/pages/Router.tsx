import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import List from "./List";
import Detail from "./Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

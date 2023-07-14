import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Header";

import List from "./List";
import Detail from "./Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

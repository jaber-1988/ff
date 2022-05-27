import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import { Home } from "./pages/Home";
import Customer from "./pages/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Imprint } from "./pages/Imprint";
import { PageNotFound } from "./pages/PageNotFound";
import { PageNotFoundContent } from "./pages/PageNotFoundContent";
import NewCustomer from "./components/NewCustomer";
import { PageNotFoundAlternative } from "./pages/PageNotFoundAlternative";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="customers/:id" element={<Customer />} />
          <Route path="customers/new" element={<NewCustomer />} />
          <Route path="imprint" element={<Imprint />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<PageNotFoundAlternative />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);



import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Cities from "./Components/Cities";
import Countries from "./Components/Countries";

import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./Contexts/CitiesContexts";

function App() {
  return (
    <>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
           <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to={"cities"} />} />

              <Route
                path="cities"
                element={
                  <Cities/>
                }
              />
              <Route path={"cities/:id"} element={<City />} />
              <Route path="countries" element={<Countries/>} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>













        
      </CitiesProvider>
    </>
  );
}

export default App;

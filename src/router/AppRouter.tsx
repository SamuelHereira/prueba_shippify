import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompaniesScreen from "../modules/companies/screens/CompaniesScreen";
import DriversScreen from "../modules/drivers/screens/DriversScreen";
import Layout from "../modules/layout";
import VehiclesScreen from "../modules/vehicles/screens/VehiclesScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/companies" element={<CompaniesScreen />} />
          <Route path="/drivers" element={<DriversScreen />} />
          <Route path="/vehicles" element={<VehiclesScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;

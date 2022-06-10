import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { middlewareApi } from "../api/middleware";
import { companiesApi } from "../modules/companies/slices/companiesApiSlice";
import { companiesSlice } from "../modules/companies/slices/companiesSlice";
import { driversApi } from "../modules/drivers/slices/DriversApiSlice";
import { driversSlice } from "../modules/drivers/slices/DriversSlice";
// eslinint-disable-next-line
import { vehiclesApi } from "../modules/vehicles/slices/vehiclesApiSlice";
import { vehiclesSlice } from "../modules/vehicles/slices/VehiclesSlice";

export const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    drivers: driversSlice.reducer,
    [driversApi.reducerPath]: driversApi.reducer,
    vehicles: vehiclesSlice.reducer,
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
    // [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

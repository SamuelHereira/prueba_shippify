import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "../interfaces/VehiclesInterfaces";

export interface VehiclesState {
  vehiclesList: Vehicle[];
  vehicleSelectedId: number | null;
  vehicleToDeleteId: number | null;
  vehiclesModalOpen: boolean;
  vehiclesDeleteModalOpen: boolean;
}

const initialState: VehiclesState = {
  vehiclesList: [],
  vehicleSelectedId: null,
  vehicleToDeleteId: null,
  vehiclesModalOpen: false,
  vehiclesDeleteModalOpen: false,
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehiclesList: (state, action: PayloadAction<Vehicle[]>) => {
      state.vehiclesList = action.payload;
    },
    setVehicleSelectedId: (state, action: PayloadAction<number>) => {
      state.vehicleSelectedId = action.payload;
    },
    resetvehicleSelectedId: (state) => {
      state.vehicleSelectedId = null;
    },
    setVehicleToDeleteId: (state, action: PayloadAction<number>) => {
      state.vehicleToDeleteId = action.payload;
    },
    resetVehicleToDeleteId: (state) => {
      state.vehicleToDeleteId = null;
    },
    setVehiclesModalOpen: (state, action: PayloadAction<boolean>) => {
      state.vehiclesModalOpen = action.payload;
    },
    setVehiclesDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.vehiclesDeleteModalOpen = action.payload;
    },
  },
});

export const {
  setVehiclesList,
  setVehicleSelectedId,
  resetvehicleSelectedId,
  setVehicleToDeleteId,
  resetVehicleToDeleteId,
  setVehiclesModalOpen,
  setVehiclesDeleteModalOpen,
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;

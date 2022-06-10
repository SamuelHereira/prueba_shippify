import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Driver } from "../interfaces/DriversInterfaces";

export interface DriversState {
  driversList: Driver[];
  driverSelectedId: number | null;
  driverToDeleteId: number | null;
}

const initialState: DriversState = {
  driversList: [],
  driverSelectedId: null,
  driverToDeleteId: null,
};

export const driversSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {
    setDriversList: (state, action: PayloadAction<Driver[]>) => {
      state.driversList = action.payload;
    },
    setDriverSelectedId: (state, action: PayloadAction<number>) => {
      state.driverSelectedId = action.payload;
    },
    resetDriverSelectedId: (state) => {
      state.driverSelectedId = null;
    },
    setDriverToDeleteId: (state, action: PayloadAction<number>) => {
      state.driverToDeleteId = action.payload;
    },
    resetDriverToDeleteId: (state) => {
      state.driverToDeleteId = null;
    },
  },
});

export const {
  setDriversList,
  setDriverSelectedId,
  resetDriverSelectedId,
  setDriverToDeleteId,
  resetDriverToDeleteId,
} = driversSlice.actions;

export default driversSlice.reducer;

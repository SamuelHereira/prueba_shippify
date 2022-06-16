import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Driver } from "../interfaces/DriversInterfaces";

export interface DriversState {
  driversList: Driver[];
  driverSelectedId: number | null;
  driverToDeleteId: number | null;
  driverSideDialogOpen: boolean;
  page: number;
  perPage: number;
  total: number;
}

const initialState: DriversState = {
  driversList: [],
  driverSelectedId: null,
  driverToDeleteId: null,
  driverSideDialogOpen: false,
  page: 1,
  perPage: 5,
  total: 0,
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
    setDriverSideDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.driverSideDialogOpen = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const {
  setDriversList,
  setDriverSelectedId,
  resetDriverSelectedId,
  setDriverToDeleteId,
  resetDriverToDeleteId,
  setDriverSideDialogOpen,
  setPage,
  setPerPage,
  setTotal,
} = driversSlice.actions;

export default driversSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company } from "../interfaces/companiesInterfaces";

export interface CompaniesState {
  companiesList: Company[];
  companySelectedId: number | null;
  companyToDeleteId: number | null;
  page: number;
  perPage: number;
  total: number;
}

const initialState: CompaniesState = {
  companiesList: [],
  companySelectedId: null,
  companyToDeleteId: null,
  page: 1,
  perPage: 5,
  total: 0,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompaniesList: (state, action: PayloadAction<Company[]>) => {
      state.companiesList = action.payload;
    },
    setCompanySelectedId: (state, action: PayloadAction<number>) => {
      state.companySelectedId = action.payload;
    },
    resetCompanySelectedId: (state) => {
      state.companySelectedId = null;
    },
    setCompanyToDeleteId: (state, action: PayloadAction<number>) => {
      state.companyToDeleteId = action.payload;
    },
    resetCompanyToDeleteId: (state) => {
      state.companyToDeleteId = null;
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
  setCompaniesList,
  setCompanySelectedId,
  resetCompanySelectedId,
  setCompanyToDeleteId,
  resetCompanyToDeleteId,
  setPage,
  setPerPage,
  setTotal,
} = companiesSlice.actions;

export default companiesSlice.reducer;

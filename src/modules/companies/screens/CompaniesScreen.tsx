import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import CompaniesTable from "../components/CompaniesTable";
import { useGetCompaniesQuery } from "../slices/companiesApiSlice";
import { setCompaniesList } from "../slices/companiesSlice";

const CompaniesScreen = () => {
  const { page, perPage } = useAppSelector((state) => state.companies);

  const { data = [], isLoading } = useGetCompaniesQuery({
    page,
    perPage,
  });

  const dispatch = useAppDispatch();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">Companies </Typography>
      </Grid>
      <Grid item xs={12}>
        {isLoading ? <Typography>Loading...</Typography> : <CompaniesTable />}
      </Grid>
    </Grid>
  );
};

export default CompaniesScreen;

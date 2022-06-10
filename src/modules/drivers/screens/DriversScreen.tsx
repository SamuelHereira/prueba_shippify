import { ArrowBack } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { resetCompanySelectedId } from "../../companies/slices/companiesSlice";
import CompaniesTable from "../components/DriversTable";
import { useGetDriversQuery } from "../slices/DriversApiSlice";
import { setDriversList } from "../slices/DriversSlice";

const DriversScreen = () => {
  const navigate = useNavigate();

  const { companySelectedId, companiesList } = useAppSelector(
    (state) => state.companies
  );
  const { data = [], isLoading } = useGetDriversQuery(
    {
      company_id: companySelectedId!,
    },
    {
      skip: !companySelectedId,
    }
  );

  const dispatch = useAppDispatch();
  const company = companiesList?.find(
    (company) => company.id === companySelectedId
  );

  useEffect(() => {
    if (!companySelectedId) {
      navigate("/companies");
    }
  }, []);

  const handleBack = () => {
    dispatch(resetCompanySelectedId());
    navigate("/companies");
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container flexDirection="row" gap={2}>
          <Grid item>
            <IconButton onClick={handleBack}>
              <ArrowBack />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h4">{company?.name}'s Drivers</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {isLoading ? <Typography>Loading...</Typography> : <CompaniesTable />}
      </Grid>
    </Grid>
  );
};

export default DriversScreen;

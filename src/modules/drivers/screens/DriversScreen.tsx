import { AddCircleOutline, ArrowBack } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { resetCompanySelectedId } from "../../companies/slices/companiesSlice";
import { CustomButton } from "../../shared/Buttons";
import DriversSideDialog from "../components/add/AddDriverDialog";
import CompaniesTable from "../components/DriversTable";
import {
  useGetDriversQuery,
  useLazyGetDriversQuery,
} from "../slices/DriversApiSlice";
import {
  setDriverSelectedId,
  setDriverSideDialogOpen,
  setDriversList,
} from "../slices/DriversSlice";

const DriversScreen = () => {
  const navigate = useNavigate();

  const { companySelectedId, companiesList } = useAppSelector(
    (state) => state.companies
  );

  const { page, perPage, driverSideDialogOpen } = useAppSelector(
    (state) => state.drivers
  );

  const [getDrivers, { data, isLoading }] = useLazyGetDriversQuery();

  const dispatch = useAppDispatch();

  const company = companiesList?.find(
    (company) => company.id === companySelectedId
  );

  useEffect(() => {
    if (!companySelectedId) {
      navigate("/companies");
    }
  }, []);

  useEffect(() => {
    getDrivers({
      company_id: companySelectedId!,
      page: page,
      limit: perPage,
    });
  }, [data, page, perPage]);

  useEffect(() => {
    if (data) {
      dispatch(setDriversList(data));
    }
  }, [data]);

  const handleBack = () => {
    dispatch(resetCompanySelectedId());
    navigate("/companies");
  };

  const handleCloseDialog = () => {
    dispatch(setDriverSideDialogOpen(false));
  };

  const handleAddDriver = () => {
    dispatch(setDriverSideDialogOpen(true));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          flexDirection="row"
          gap={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item container xs={7} gap={2}>
            <Grid item>
              <IconButton onClick={handleBack}>
                <ArrowBack />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h4">{company?.name}'s Drivers</Typography>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <CustomButton
              startIcon={<AddCircleOutline />}
              variant="contained"
              fullWidth
              onClick={handleAddDriver}
            >
              Add Driver
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {isLoading ? <Typography>Loading...</Typography> : <CompaniesTable />}
      </Grid>

      {driverSideDialogOpen && (
        <DriversSideDialog open handleCloseDialog={handleCloseDialog} />
      )}
    </Grid>
  );
};

export default DriversScreen;

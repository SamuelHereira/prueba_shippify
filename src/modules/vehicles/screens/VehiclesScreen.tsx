import { AddCircleOutline, ArrowBack } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { resetDriverSelectedId } from "../../drivers/slices/DriversSlice";
import { CustomButton } from "../../shared/Buttons";
import VehicleSideDialog from "../components/add/AddVehicleDialog";
import DeleteVehicleDialog from "../components/delete/DeleteVehicleDialog";
import CompaniesTable from "../components/VehiclesTable";
import { useGetVehiclesQuery } from "../slices/vehiclesApiSlice";
import {
  resetvehicleSelectedId,
  setVehiclesDeleteModalOpen,
  setVehiclesModalOpen,
} from "../slices/VehiclesSlice";

const VehiclesScreen = () => {
  const navigate = useNavigate();

  const { companySelectedId } = useAppSelector((state) => state.companies);
  const { driverSelectedId, driversList } = useAppSelector(
    (state) => state.drivers
  );
  const { vehiclesModalOpen, vehiclesDeleteModalOpen } = useAppSelector(
    (state) => state.vehicles
  );

  const { data = [], isLoading } = useGetVehiclesQuery(
    {
      company_id: companySelectedId!,
      driver_id: driverSelectedId!,
    },
    {
      skip: !companySelectedId || !driverSelectedId,
      refetchOnMountOrArgChange: 1,
    }
  );

  const driver = driversList?.find((driver) => driver.id === driverSelectedId);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setVehiclesList(data));
  // }, [data]);

  useEffect(() => {
    if (!driverSelectedId) {
      navigate("/drivers");
    }
  }, []);

  const handleBack = () => {
    dispatch(resetDriverSelectedId());
    navigate("/drivers");
  };

  const handleAddVehicle = () => {
    dispatch(setVehiclesModalOpen(true));
  };

  const handleCloseDialog = () => {
    dispatch(setVehiclesModalOpen(false));
    dispatch(resetvehicleSelectedId());
  };

  const handleCloseDeleteDialog = () => {
    dispatch(resetvehicleSelectedId());
    dispatch(setVehiclesDeleteModalOpen(false));
  };

  return (
    <Grid container>
      <Grid item xs={9}>
        <Grid container flexDirection="row" gap={2}>
          <Grid item>
            <IconButton onClick={handleBack}>
              <ArrowBack />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              {driver?.first_name} {driver?.last_name}'s Vehicles
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <CustomButton
          startIcon={<AddCircleOutline />}
          variant="contained"
          fullWidth
          onClick={handleAddVehicle}
        >
          Add Vehicle
        </CustomButton>
      </Grid>
      <Grid item xs={12}>
        {isLoading ? <Typography>Loading...</Typography> : <CompaniesTable />}
      </Grid>

      <VehicleSideDialog
        open={vehiclesModalOpen}
        handleCloseDialog={handleCloseDialog}
      />

      {vehiclesDeleteModalOpen && (
        <DeleteVehicleDialog
          open={vehiclesDeleteModalOpen}
          handleCloseDialog={handleCloseDeleteDialog}
        />
      )}
    </Grid>
  );
};

export default VehiclesScreen;

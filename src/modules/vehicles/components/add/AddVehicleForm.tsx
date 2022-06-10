import { AddCircle, AddCircleOutline } from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import {
  useAddVehicleMutation,
  useUpdateVehicleMutation,
} from "../../slices/vehiclesApiSlice";
import { vehiclesFormSchema } from "../../validations/vehicles.validation";

const AddVehicleForm = () => {
  const { vehicleSelectedId, vehiclesList } = useAppSelector(
    (state) => state.vehicles
  );
  const { driverSelectedId } = useAppSelector((state) => state.drivers);
  const { companySelectedId } = useAppSelector((state) => state.companies);

  const [addVehicle, { data, error, isLoading, isError, isSuccess }] =
    useAddVehicleMutation();

  const [
    updateVehicle,
    {
      data: uData,
      error: uError,
      isLoading: uIsLoading,
      isError: uIsError,
      isSuccess: uIsSuccess,
    },
  ] = useUpdateVehicleMutation();

  const vehicleSelected = vehiclesList?.find(
    (vehicle) => vehicle.id === vehicleSelectedId
  );

  const { getFieldProps, errors, touched, values, setValues, handleSubmit } =
    useFormik({
      initialValues: {
        company_id: companySelectedId!,
        driver_id: vehicleSelected?.driver_id || driverSelectedId!,
        plate: vehicleSelected?.plate || "",
        model: vehicleSelected?.model || "",
        type: vehicleSelected?.type || "",
        capacity: vehicleSelected?.capacity || "",
      },
      validationSchema: vehiclesFormSchema,
      onSubmit: async (values) => {
        if (!vehicleSelectedId) {
          await addVehicle({
            ...values,
          });
          console.log(values);
        } else {
          await updateVehicle({
            ...values,
            vehicle_id: vehicleSelectedId,
          });
          console.log(values);
        }
      },
    });

  useEffect(() => {
    setValues({
      company_id: companySelectedId!,
      driver_id: vehicleSelected?.driver_id || driverSelectedId!,
      plate: vehicleSelected?.plate || "",
      model: vehicleSelected?.model || "",
      type: vehicleSelected?.type || "",
      capacity: vehicleSelected?.capacity || "",
    });
  }, [vehicleSelected]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {(isError || uIsError || isSuccess || uIsSuccess) && (
            <Grid container>
              <Alert severity={isError || uIsError ? "error" : "success"}>
                {isError || uIsError
                  ? isError
                    ? "An error occurred"
                    : "Vehicle cannot be updated"
                  : isSuccess
                  ? "Vehicle added successfully"
                  : "Vehicle updated successfully"}
              </Alert>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Plate</InputLabel>
          <TextField
            placeholder="Enter the vehicle plate"
            {...getFieldProps("plate")}
            error={Boolean(errors.plate && touched.plate)}
            fullWidth
          />
          {errors.plate && touched.plate && (
            <FormHelperText error>{errors.plate}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Model</InputLabel>
          <TextField
            placeholder="Enter the vehicle model"
            {...getFieldProps("model")}
            error={Boolean(errors.model && touched.model)}
            fullWidth
          />
          {errors.model && touched.model && (
            <FormHelperText error>{errors.model}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Type</InputLabel>
          <TextField
            placeholder="Enter the vehicle type"
            {...getFieldProps("type")}
            error={Boolean(errors.type && touched.type)}
            fullWidth
          />
          {errors.type && touched.type && (
            <FormHelperText error>{errors.type}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Capacity</InputLabel>
          <TextField
            placeholder="Enter the vehicle capacity"
            {...getFieldProps("capacity")}
            error={Boolean(errors.capacity && touched.capacity)}
            fullWidth
          />
          {errors.capacity && touched.capacity && (
            <FormHelperText error>{errors.capacity}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading || uIsLoading}
            startIcon={<AddCircleOutline />}
            endIcon={
              isLoading || (uIsLoading && <CircularProgress size={12} />)
            }
            fullWidth
          >
            {vehicleSelectedId ? "Update" : "Add"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddVehicleForm;

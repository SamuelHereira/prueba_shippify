import { AddCircleOutline } from "@mui/icons-material";
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { driverSchema } from "../../validation/drivers.validation";

const AddDriverForm = () => {
  const { errors, getFieldProps, handleSubmit, touched } = useFormik({
    initialValues: {
      city: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      avatar_url: "",
      status: "Activo",
      company_id: "",
    },
    validationSchema: driverSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>City</InputLabel>
          <TextField
            {...getFieldProps("city")}
            error={Boolean(errors.city && touched.city)}
          />
          {errors.city && touched.city && (
            <FormHelperText error>{errors.city}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>First name</InputLabel>
          <TextField
            {...getFieldProps("first_name")}
            error={Boolean(errors.first_name && touched.first_name)}
          />
          {errors.first_name && touched.first_name && (
            <FormHelperText error>{errors.first_name}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Last name</InputLabel>
          <TextField
            {...getFieldProps("last_name")}
            error={Boolean(errors.last_name && touched.last_name)}
          />
          {errors.last_name && touched.last_name && (
            <FormHelperText error>{errors.last_name}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Email</InputLabel>
          <TextField
            {...getFieldProps("email")}
            error={Boolean(errors.email && touched.email)}
          />
          {errors.email && touched.email && (
            <FormHelperText error>{errors.email}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Phone</InputLabel>
          <TextField
            {...getFieldProps("phone")}
            error={Boolean(errors.phone && touched.phone)}
          />
          {errors.phone && touched.phone && (
            <FormHelperText error>{errors.phone}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Avatar URL</InputLabel>
          <TextField
            {...getFieldProps("avatar_url")}
            error={Boolean(errors.avatar_url && touched.avatar_url)}
          />
          {errors.avatar_url && touched.avatar_url && (
            <FormHelperText error>{errors.avatar_url}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // disabled={isLoading || uIsLoading}
            startIcon={<AddCircleOutline />}
            // endIcon={
            //   isLoading || (uIsLoading && <CircularProgress size={12} />)
            // }
            fullWidth
          >
            Add Driver
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddDriverForm;

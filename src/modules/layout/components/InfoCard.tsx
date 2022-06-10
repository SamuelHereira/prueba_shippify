import {
  Avatar,
  Card,
  CardProps,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";

const CustomCard = styled(Card)<CardProps>(() => ({
  padding: "1em",
  borderRadius: "12px",
}));

const InfoCard = () => {
  const { companySelectedId, companiesList } = useAppSelector(
    (state) => state.companies
  );

  const { driverSelectedId, driversList } = useAppSelector(
    (state) => state.drivers
  );

  const company = companiesList?.find(
    (company) => company.id === companySelectedId
  );

  const driver = driversList?.find((driver) => driver.id === driverSelectedId);

  return (
    <>
      {companySelectedId && (
        <CustomCard>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Info</Typography>
            </Grid>
            {!driverSelectedId ? (
              <>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>Company: </strong>
                    {company?.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>City:</strong> {company?.city}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>Drivers:</strong>{" "}
                    {
                      driversList?.filter(
                        (driver) => driver.company_id === companySelectedId
                      ).length
                    }
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Avatar
                    sx={{
                      margin: "0 auto",
                      height: "70px",
                      width: "70px",
                    }}
                    src={driver?.avatar_url}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body1">
                    {driver?.first_name} {driver?.last_name}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body1">
                    <strong>Company</strong>: {company?.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body1">
                    <strong>City</strong>: {company?.city}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body1">
                    <strong>Phone</strong>: {driver?.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body1">
                    <strong>Email</strong>: {driver?.email}
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </CustomCard>
      )}
    </>
  );
};

export default InfoCard;

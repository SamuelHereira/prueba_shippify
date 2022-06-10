import { DirectionsCar } from "@mui/icons-material";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  CustomTableCell,
  CustomTableHeaderCell,
} from "../../shared/TableComponents";
import { setDriverSelectedId } from "../slices/DriversSlice";

const DriversTable = () => {
  const { driversList } = useAppSelector((state) => state.drivers);
  const { companiesList } = useAppSelector((state) => state.companies);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleViewDrivers = (id: number) => {
    dispatch(setDriverSelectedId(id));
    navigate("/vehicles");
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeaderCell>Company</CustomTableHeaderCell>
            <CustomTableHeaderCell>City</CustomTableHeaderCell>
            <CustomTableHeaderCell>First Name</CustomTableHeaderCell>
            <CustomTableHeaderCell>Last Name</CustomTableHeaderCell>
            <CustomTableHeaderCell>Email</CustomTableHeaderCell>
            <CustomTableHeaderCell>Phone</CustomTableHeaderCell>
            <CustomTableHeaderCell>Status</CustomTableHeaderCell>
            <CustomTableHeaderCell>Actions</CustomTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {driversList?.map((driver) => (
            <TableRow key={driver.id}>
              <CustomTableCell>
                {
                  companiesList.find(
                    (company) => company.id === driver.company_id
                  )?.name
                }
              </CustomTableCell>
              <CustomTableCell>{driver.city}</CustomTableCell>
              <CustomTableCell>{driver.first_name}</CustomTableCell>
              <CustomTableCell>{driver.last_name}</CustomTableCell>
              <CustomTableCell>{driver.email}</CustomTableCell>
              <CustomTableCell>{driver.phone}</CustomTableCell>
              <CustomTableCell>{driver.status}</CustomTableCell>
              <CustomTableCell align="center">
                <Tooltip
                  title={<Typography variant="body1">View vehicles</Typography>}
                >
                  <IconButton onClick={() => handleViewDrivers(driver.id)}>
                    <DirectionsCar />
                  </IconButton>
                </Tooltip>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DriversTable;

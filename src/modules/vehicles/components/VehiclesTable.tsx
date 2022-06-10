import { Delete, Edit } from "@mui/icons-material";
import {
  Alert,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  CustomTableCell,
  CustomTableHeaderCell,
} from "../../shared/TableComponents";
import {
  useAddVehicleMutation,
  useUpdateVehicleMutation,
} from "../slices/vehiclesApiSlice";
import {
  setVehiclesDeleteModalOpen,
  setVehicleSelectedId,
  setVehiclesModalOpen,
  setVehicleToDeleteId,
} from "../slices/VehiclesSlice";

const VehiclesTable = () => {
  const { vehiclesList } = useAppSelector((state) => state.vehicles);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    dispatch(setVehicleSelectedId(id));
    dispatch(setVehiclesModalOpen(true));
  };

  const handleDelete = (id: number) => {
    dispatch(setVehicleToDeleteId(id));
    dispatch(setVehiclesDeleteModalOpen(true));
  };

  const [, { error, isError, isSuccess }] = useAddVehicleMutation();

  const [, { error: uError, isError: uIsError, isSuccess: uIsSuccess }] =
    useUpdateVehicleMutation();

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableHeaderCell>Driver</CustomTableHeaderCell>
              <CustomTableHeaderCell>Plate</CustomTableHeaderCell>
              <CustomTableHeaderCell>Model</CustomTableHeaderCell>
              <CustomTableHeaderCell>Type</CustomTableHeaderCell>
              <CustomTableHeaderCell>Capacity</CustomTableHeaderCell>
              <CustomTableHeaderCell>Actions</CustomTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehiclesList.length > 0 ? (
              <>
                {vehiclesList?.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <CustomTableCell>{vehicle.driver_id}</CustomTableCell>
                    <CustomTableCell>{vehicle.plate}</CustomTableCell>
                    <CustomTableCell>{vehicle.model}</CustomTableCell>
                    <CustomTableCell>{vehicle.type}</CustomTableCell>
                    <CustomTableCell>{vehicle.capacity}</CustomTableCell>
                    <CustomTableCell>
                      <IconButton onClick={() => handleEdit(vehicle.id)}>
                        <Tooltip title="Edit">
                          <Edit />
                        </Tooltip>
                      </IconButton>
                      <IconButton onClick={() => handleDelete(vehicle.id)}>
                        <Tooltip title="Delete">
                          <Delete />
                        </Tooltip>
                      </IconButton>
                    </CustomTableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Alert severity="info">No vehicles found</Alert>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VehiclesTable;

import { Person } from "@mui/icons-material";
import {
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
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
import {
  setCompanySelectedId,
  setPage,
  setPerPage,
} from "../slices/companiesSlice";

const CompaniesTable = () => {
  const { companiesList, page, perPage, total } = useAppSelector(
    (state) => state.companies
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleViewDrivers = (id: number) => {
    dispatch(setCompanySelectedId(id));
    navigate("/drivers");
  };

  return (
    <TableContainer sx={{ maxWidth: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableHeaderCell>Name</CustomTableHeaderCell>
            <CustomTableHeaderCell align="center">City</CustomTableHeaderCell>
            <CustomTableHeaderCell align="center">Status</CustomTableHeaderCell>
            <CustomTableHeaderCell align="center">
              Plan Type
            </CustomTableHeaderCell>
            <CustomTableHeaderCell align="center">
              Actions
            </CustomTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companiesList?.map((company) => (
            <TableRow key={company.id}>
              <CustomTableCell>{company.name}</CustomTableCell>
              <CustomTableCell align="center">{company.city}</CustomTableCell>
              <CustomTableCell align="center">{company.status}</CustomTableCell>
              <CustomTableCell align="center">
                {company.plan_type}
              </CustomTableCell>
              <CustomTableCell align="center">
                <Tooltip
                  title={<Typography variant="body1">View drivers</Typography>}
                >
                  <IconButton onClick={() => handleViewDrivers(company.id)}>
                    <Person />
                  </IconButton>
                </Tooltip>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        page={page - 1}
        onPageChange={(event, newPage) => {
          dispatch(setPage(newPage + 1));
        }}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={(event) => {
          dispatch(setPerPage(Number(event.target.value)));
        }}
        rowsPerPage={perPage}
        count={total}
      />
    </TableContainer>
  );
};

export default CompaniesTable;

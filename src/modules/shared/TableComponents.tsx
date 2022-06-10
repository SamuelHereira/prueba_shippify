import { styled, TableCell, TableCellProps } from "@mui/material";

export const CustomTableCell = styled(TableCell)<TableCellProps>(() => ({
  fontSize: "1em",
}));

export const CustomTableHeaderCell = styled(TableCell)<TableCellProps>(() => ({
  fontSize: "1.2em",
  fontWeight: "bold",
}));

import {
  List,
  ListProps,
  ListItem,
  ListItemProps,
  styled,
} from "@mui/material";

export const StyledMenu = styled(List)<ListProps>(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

export const StyledMenuItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
  backgroundColor: "#004E98",
  borderRadius: "12px",
  fontSize: "1.2em",
  padding: "1em 1.2em",
  "& a": {
    color: "white",
    textDecoration: "none",
    width: "100%",
  },
  "&:hover": {
    backgroundColor: "#3A6EA5",
  },
}));

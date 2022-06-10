import { Button, ButtonProps, styled } from "@mui/material";

export const CustomButton = styled(Button)<ButtonProps>(() => ({
  fontSize: "1em",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#004E98",
  borderColor: "#004E98",
  borderRadius: "12px",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "1em 2em",
  margin: "5px",
  "&:hover": {
    backgroundColor: "#3A6EA5",
    color: "white",
    borderColor: "blue",
    borderWidth: "1px",
  },
}));

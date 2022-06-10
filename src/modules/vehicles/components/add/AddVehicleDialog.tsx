import { ArrowBack } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  makeStyles,
  Slide,
  SlideProps,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import AddVehicleForm from "./AddVehicleForm";

// animation
const Transition = forwardRef(function Transition(props: SlideProps, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export interface Props {
  open: boolean;
  handleCloseDialog: (e: React.SyntheticEvent) => void;
}

const VehicleSideDialog = ({ open, handleCloseDialog }: Props) => {
  // const dispatch = useDispatch();

  const { vehicleSelectedId } = useAppSelector((state) => state.vehicles);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseDialog}
      sx={{
        "&>div:nth-child(3)": {
          justifyContent: "flex-end",
          "&>div": {
            margin: "0px",
            borderRadius: "0px",
            maxWidth: "300px",
            height: "100vh",
            maxHeight: "100vh",
            "&>div.MuiDialogContent-root>div.scrollbar-container": {
              paddingLeft: "20px",
              overflow: "hidden",
            },
          },
        },
      }}
    >
      <DialogTitle>
        <Grid item container alignItems="center" gap={1}>
          <IconButton onClick={handleCloseDialog}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h5">
            {vehicleSelectedId ? "Edit vehicle" : "Add vehicle"}
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <AddVehicleForm />
      </DialogContent>
      <DialogActions>
        {/* <AnimateButton>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </AnimateButton>
          <Button variant="text" onClick={handleCloseDialog} color="primary">
            Close
          </Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default VehicleSideDialog;

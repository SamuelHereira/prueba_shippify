import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { useDeleteVehicleMutation } from "../../slices/vehiclesApiSlice";
import { setVehiclesDeleteModalOpen } from "../../slices/VehiclesSlice";

interface DeleteVehicleDialogProps {
  open: boolean;
  handleCloseDialog: (e: React.SyntheticEvent) => void;
}

const DeleteVehicleDialog = ({
  open,
  handleCloseDialog,
}: DeleteVehicleDialogProps) => {
  const dispatch = useAppDispatch();
  const [deleteVehicle, { isLoading, isSuccess, isError }] =
    useDeleteVehicleMutation();

  const { companySelectedId } = useAppSelector((state) => state.companies);
  const { driverSelectedId } = useAppSelector((state) => state.drivers);
  const { vehicleToDeleteId } = useAppSelector((state) => state.vehicles);

  const handleDeleteVehicle = async () => {
    await deleteVehicle({
      company_id: companySelectedId!,
      driver_id: driverSelectedId!,
      vehicle_id: vehicleToDeleteId!,
    });
  };

  const successMessage = (
    <>
      <DialogTitle>Vehicle deleted</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The vehicle has been deleted successfully.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </>
  );

  const errorMessage = (
    <>
      <DialogTitle>Error deleting vehicle</DialogTitle>
      <DialogContent>
        <DialogContentText>
          There was an error deleting the vehicle.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </>
  );

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      {isSuccess ? (
        <>{successMessage}</>
      ) : isError ? (
        <>{errorMessage}</>
      ) : (
        <>
          <DialogTitle>Delete Vehicle</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this vehicle?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleDeleteVehicle}
              disabled={isLoading}
              endIcon={isLoading && <CircularProgress size={20} />}
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={handleCloseDialog}
              disabled={isLoading}
              endIcon={isLoading && <CircularProgress size={12} />}
              color="primary"
            >
              No
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default DeleteVehicleDialog;

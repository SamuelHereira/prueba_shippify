import { mainApi } from "../../../api/mainApi";
import { middlewareApi } from "../../../api/middleware";
import { Vehicle } from "../interfaces/VehiclesInterfaces";
import { setVehiclesList } from "./VehiclesSlice";

export const vehiclesTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["VEHICLES"],
});

export const vehiclesApi = vehiclesTags.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query<
      Vehicle[],
      {
        company_id: number;
        driver_id: number;
      }
    >({
      queryFn: async ({ company_id, driver_id }, { dispatch }) => {
        try {
          const { data } = await mainApi.get<Vehicle[]>(
            `/company/${company_id}/driver/${driver_id}/vehicle`
          );

          dispatch(setVehiclesList(data));

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                (vehicle) =>
                  ({
                    type: "VEHICLES",
                    id: vehicle.id,
                  } as const)
              ),
              { type: "VEHICLES", id: "LIST" },
            ]
          : [{ type: "VEHICLES", id: "LIST" }],
    }),

    addVehicle: builder.mutation<
      Vehicle[],
      {
        company_id: number;
        driver_id: number;
        type: string;
        model: string;
        plate: string;
        capacity: string;
      }
    >({
      queryFn: async (
        { company_id, driver_id, plate, type, model, capacity },
        { dispatch }
      ) => {
        try {
          const { data } = await mainApi.post<Vehicle[]>(
            `/company/${company_id}/driver/${driver_id}/vehicle`,
            {
              type,
              model,
              plate,
              capacity,
              creation_date: new Date().toISOString(),
            }
          );

          // dispatch(setVehiclesList(data));

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: [{ type: "VEHICLES", id: "LIST" }],
    }),

    updateVehicle: builder.mutation<
      Vehicle[],
      {
        company_id: number;
        driver_id: number;
        vehicle_id: number;
        type: string;
        model: string;
        plate: string;
        capacity: string;
      }
    >({
      queryFn: async (
        { company_id, driver_id, vehicle_id, type, model, plate, capacity },
        { dispatch, getState }
      ) => {
        try {
          const { data } = await mainApi.put<Vehicle>(
            `/company/${company_id}/driver/${driver_id}/vehicle/${vehicle_id}`,
            {
              type,
              model,
              plate,
              capacity,
            }
          );

          // const vehiclesList
          // dispatch(setVehiclesList(data));

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: [{ type: "VEHICLES", id: "LIST" }],
    }),

    deleteVehicle: builder.mutation<
      Vehicle[],
      {
        company_id: number;
        driver_id: number;
        vehicle_id: number;
      }
    >({
      queryFn: async ({ company_id, driver_id, vehicle_id }, { dispatch }) => {
        try {
          const { data } = await mainApi.delete<Vehicle[]>(
            `/company/${company_id}/driver/${driver_id}/vehicle/${vehicle_id}`
          );

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      invalidatesTags: [{ type: "VEHICLES", id: "LIST" }],
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useAddVehicleMutation,
  useDeleteVehicleMutation,
  useUpdateVehicleMutation,
} = vehiclesApi;

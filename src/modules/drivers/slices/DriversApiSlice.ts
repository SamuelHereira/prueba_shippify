import { mainApi } from "../../../api/mainApi";
import { middlewareApi } from "../../../api/middleware";
import { Driver } from "../interfaces/DriversInterfaces";
import { setDriversList } from "./DriversSlice";

export const driversTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["drivers"],
});

export const driversApi = driversTags.injectEndpoints({
  endpoints: (builder) => ({
    getDrivers: builder.query<
      Driver[],
      {
        company_id: number;
      }
    >({
      queryFn: async ({ company_id }, { dispatch }) => {
        try {
          const { data } = await mainApi.get<Driver[]>(
            `/company/${company_id}/driver`
          );

          dispatch(setDriversList(data));

          return { data: Array.isArray(data) ? data : [] };
        } catch (error: any) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetDriversQuery } = driversApi;

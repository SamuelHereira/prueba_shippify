import { mainApi } from "../../../api/mainApi";
import { middlewareApi } from "../../../api/middleware";
import { Driver, DriverResponse } from "../interfaces/DriversInterfaces";
import { setDriversList, setTotal } from "./DriversSlice";

export const driversTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["drivers"],
});

export const driversApi = driversTags.injectEndpoints({
  endpoints: (builder) => ({
    getDrivers: builder.query<
      Driver[],
      {
        company_id: number;
        page: number;
        limit: number;
      }
    >({
      queryFn: async ({ company_id, page, limit }, { dispatch }) => {
        try {
          const { data } = await mainApi.get<DriverResponse>(
            `/company/${company_id}/driver`,
            {
              params: {
                page,
                limit,
              },
            }
          );

          dispatch(setTotal(data.total));

          // dispatch(setDriversList(data));

          return { data: Array.isArray(data.data) ? data.data : [] };
        } catch (error: any) {
          return { error };
        }
      },
    }),
    addDriver: builder.mutation<
      Driver,
      {
        city: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        avatar_url: string;
        status: string;
        company_id: number;
      }
    >({
      queryFn: async (
        {
          city,
          first_name,
          last_name,
          email,
          phone,
          avatar_url,
          status,
          company_id,
        },
        { dispatch }
      ) => {
        try {
          const { data } = await mainApi.post<Driver>(
            `/company/${company_id}/driver`,
            {
              city,
              first_name,
              last_name,
              email,
              phone,
              avatar_url,
              status,
              company_id,
            }
          );

          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetDriversQuery, useLazyGetDriversQuery } = driversApi;

import { mainApi } from "../../../api/mainApi";
import { middlewareApi } from "../../../api/middleware";
import { Company, CompanyResponse } from "../interfaces/companiesInterfaces";
import { setCompaniesList, setTotal } from "./companiesSlice";

export const companiesTags = middlewareApi.enhanceEndpoints({
  addTagTypes: ["companies"],
});

export const companiesApi = companiesTags.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], {}>({
      queryFn: async ({}, { dispatch }) => {
        try {
          const { data } = await mainApi.get<CompanyResponse>(`/company`);

          console.log(data);

          dispatch(setCompaniesList(data.data));
          dispatch(setTotal(data.total));

          return { data: Array.isArray(data.data) ? data.data : [] };
        } catch (error: any) {
          return { error };
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                (company) => ({ type: "companies", id: company.id } as const)
              ),
              { type: "companies", id: "LIST" },
            ]
          : [{ type: "companies", id: "LIST" }],
    }),
  }),
});

export const { useGetCompaniesQuery } = companiesApi;

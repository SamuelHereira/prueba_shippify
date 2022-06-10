export interface Company {
  id: number;
  name: string;
  city: number;
  status: string;
  plan_type: string;
  creation_date: string;
}

export interface CompanyResponse {
  data: Company[];
  total: number;
}

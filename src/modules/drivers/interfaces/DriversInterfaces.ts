export interface Driver {
  id: number;
  company_id: number;
  city: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar_url: string;
  status: string;
  creation_date: string;
}

export interface DriverResponse {
  data: Driver[];
  total: number;
}

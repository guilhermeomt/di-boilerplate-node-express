export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  created_at: Date | string;
  updated_at: Date | string;
}

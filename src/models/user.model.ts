import { Roles } from './roles';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: Roles;
  token: string;
  image?: string;
  location?: {
    name: string;
  };
  species?: string;
  gender?: string;
}

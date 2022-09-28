import { Roles } from './roles';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Roles;
  image?: string;
  location?: {
    name: string;
  };
  species?: string;
  gender?: string;
}

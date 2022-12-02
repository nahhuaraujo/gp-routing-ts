export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  role: 'USER' | 'ADMIN' | '';
  token: string;
  image?: string;
  location?: string;
  species?: string;
  gender?: string;
}

import { Role } from './role.enum';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: Role;
  eventRegistrationCompleted: boolean;
};

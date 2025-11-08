import { UserData } from '../models/users';

export interface UserState {
  currentUser: UserData | null;
}

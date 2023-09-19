import { AuthUser } from "../../../../../auth/domains/AuthUser";

export interface AppHeaderModel {
  user?: AuthUser;
  isAuthenticated?: boolean;
}

import { AuthUser } from "@app/auth/entities/auth-user.entity";

export interface AppHeaderModel {
  user?: AuthUser;
  isAuthenticated?: boolean;
}

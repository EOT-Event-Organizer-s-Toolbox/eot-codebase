import "express-session";

declare module "express-session" {
  interface SessionData {
    uid: string;
    user: AuthInfo;
  }
  interface AuthInfo {
    id: string
  }
}
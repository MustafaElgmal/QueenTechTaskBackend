import { Errors } from "./../types";
import { User } from "../types";

export const validationLogin = (body: User) => {
  const { userName, password } = body;
  const errors: Errors[] = [];
  if (!userName) {
    errors.push({ message: "UserName is required!" });
  }
  if (!password) {
    errors.push({ message: "Password is required!" });
  }
  return errors
};

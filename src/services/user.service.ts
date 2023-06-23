import { AxiosResponse } from "axios";
import { postRequest } from "./axiosSetup";
import { SignInData, User } from "@/types";

export const signIn = async (
  data: SignInData
): Promise<AxiosResponse<User>> => {
  const rs = await postRequest("auth/login", data);
  return rs;
};

import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorResponse, SignInData, User } from "@/types";
import { Button } from "@mui/material";
import { signIn } from "@/services/user.service";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { updateUsername } from "@/store/features/authSlice";
import { useAuthSelector } from "@/store/hooks/useAuthSelector";

const INITIAL_VALUES = {
  username: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userData = useAuthSelector();
  console.log("userData: ", userData);
  const mutation = useMutation<AxiosResponse<User>, ErrorResponse, SignInData>(
    signIn,
    {
      onSuccess: ({ data }) => {
        const { token } = data;
        Cookies.set("accessToken", token);
        dispatch(updateUsername(data.username));
        navigate("/");
      },
    }
  );
  const [values, setValues] = useState<SignInData>(INITIAL_VALUES);

  const { error } = mutation;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutation.mutate(values);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, username: value }));
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, password: value }));
  };

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handlePasswordChange}
        />
        <Button color="primary" type="submit">
          Submit
        </Button>
        {error && <p style={{ color: "red" }}>{error.response.data.message}</p>}
      </form>
    </div>
  );
};

export default SignIn;

import { useSelector } from "react-redux";
import { RootState } from "..";

export const useAuthSelector = () => {
  const projectDetails = useSelector((state: RootState) => state.auth);
  return projectDetails;
};

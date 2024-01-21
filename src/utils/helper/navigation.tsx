import { useNavigate } from "react-router";

export const navigateHelper = (path: string) => {
  const navigate = useNavigate();
  return navigate(path);
};

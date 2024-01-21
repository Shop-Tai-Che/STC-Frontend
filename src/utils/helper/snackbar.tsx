import { useSnackbar } from "zmp-ui";

export const showSnackbar = (
  message,
  type?: "warning" | "error" | "success"
) => {
  // const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
  useSnackbar().openSnackbar({
    text: `${message}`,
    type: `${type}`,
    duration: 3000,
  });
};

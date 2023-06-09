import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxReport = styled(Box)(({ theme }) => ({
  height: 400,
  width: "50%",
  margin: "80px auto 0",
  [theme.breakpoints.down("lg")]: {
    width: "70%",
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

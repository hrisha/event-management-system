import { styled } from "@mui/material/styles";
import { Input } from "@mui/material";

export const InputCustom = styled(Input)(({ theme }) => ({
  border: "1px solid #3d445152",
  marginTop: "10px",
  borderRadius: "5px",
  "&::before": {
    border: "none",
  },
  "&:hover:not(.Mui-disabled, .Mui-error)::before": {
    border: "none",
  },
  "&::after": {
    borderColor: "#3d4451",
  },
  "& input": {
    textAlign: "center",
  },
}));

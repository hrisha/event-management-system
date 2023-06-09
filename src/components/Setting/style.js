import { styled } from "@mui/material/styles";
import { Box, Input, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const MainBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "50px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#3d4451",
}));

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

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  width: "250px",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "50px",
  backgroundColor: "#3d4451",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#3d4451",
    opacity: "0.7",
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: "#3d4451",
}));

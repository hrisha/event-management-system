import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export const MainBoxHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "60px",
  backgroundColor: "#3d4451",
  justifyContent: "center",
  alignItems: "center",
}));

export const LinkPages = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "#fff",
  marginLeft: "20px",
  transition: "0.3s",
  borderRadius: "5px",
  "&.active": {
    backgroundColor: "#64748b",
    padding: "10px 20px",
  },
}));

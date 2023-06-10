import { styled } from "@mui/material/styles";
import { Box, IconButton, Input, TextareaAutosize } from "@mui/material";

export const BoxDate = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  backgroundColor: "#3d4451",
  borderRadius: "5px",
  padding: "15px",
  "&.active ": {
    backgroundColor: "#a7aab0",
    border: "1px solid #3d4451",
    textDecoration: "none",
  },
  cursor: "pointer",
}));

export const CostumeIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#64748b",
  color: "#fff",
  padding: "5px",
  borderRadius: "5px",
  width: "100%",
  "&:hover": {
    backgroundColor: "#64748b",
    opacity: "0.8",
  },
}));

export const CostumeInputDialog = styled(Input)(({ theme }) => ({
  width: "100%",
}));

export const CustomTextareaAutosize = styled(TextareaAutosize)(({ theme }) => ({
  resize: "none",
  width: "93%",
  height: "200px !important",
  borderRadius: "50px",
  backgroundColor: "transparent",
  border: "none",
  padding: "15px 10px",
  "&:focus": {
    outline: "none",
  },
  marginLeft: "8px",
}));

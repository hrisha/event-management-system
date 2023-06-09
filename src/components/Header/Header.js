import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { LinkPages, MainBoxHeader } from "./Style";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <MainBoxHeader>
          <LinkPages to="/new-item">Events</LinkPages>
          <LinkPages to="/settings">Settings</LinkPages>
          <LinkPages to="/profile">Profile</LinkPages>
          <LinkPages to="/reports">Reports</LinkPages>
        </MainBoxHeader>
      </AppBar>
    </Box>
  );
}

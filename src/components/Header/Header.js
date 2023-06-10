import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { LinkPages, Logout, MainBoxHeader } from "./Style";
import { Typography } from "@mui/material";
import { async } from "@firebase/util";
import { signOut } from "@firebase/auth";
import auth from "../../firebase";
import { useNavigate } from "react-router";


export default function ButtonAppBar() {
  const history = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    sessionStorage.setItem("userId",null);
    history("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <MainBoxHeader>
          <Box marginLeft="auto">
          <LinkPages to="/new-item">Events</LinkPages>
          <LinkPages to="/settings">Settings</LinkPages>
          <LinkPages to="/profile">Profile</LinkPages>
          <LinkPages to="/reports">Reports</LinkPages>
        </Box>
        <Logout onClick={handleLogout}>Logout</Logout>
        </MainBoxHeader>
      </AppBar>
    </Box>
  );
}

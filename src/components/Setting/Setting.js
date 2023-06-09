import React from "react";
import { ButtonSubmit, MainBox, Title } from "../SignUp/Style";
import { Box, Label, Switch } from "@mui/material";
import { Input } from "@mui/material";
import { InputCustom } from "./style";

const Setting = () => {
  return (
    <MainBox>
      <Title>Setting</Title>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <label style={{ marginRight: "10px" }}>E-mail:</label>
        <InputCustom />
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <label style={{ marginRight: "10px" }}>Phone:</label>
        <InputCustom />
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <label style={{ marginRight: "10px" }}>E-mail Enabled:</label>
        <Switch />
      </Box>
      <Box display="flex" alignItems="center" marginBottom="20px">
        <label style={{ marginRight: "10px" }}>SMS Enabled:</label>
        <Switch />
      </Box>
      <ButtonSubmit>APPLY CHANGES</ButtonSubmit>
    </MainBox>
  );
};

export default Setting;

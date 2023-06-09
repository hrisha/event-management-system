import React from "react";
import { ButtonSubmit, MainBox, Title } from "../SignUp/Style";
import { Box, Switch } from "@mui/material";
import { InputCustom } from "./style";
import { data } from "./data";

const Settings = () => {
  return (
    <MainBox>
      <Title>Setting</Title>
      {data.map(({ id, tag, label }) => {
        return (
          <Box display="flex" alignItems="center" marginBottom="20px" key={id}>
            <label style={{ marginRight: "10px", color: "#3d4451" }}>
              {label}
            </label>
            {tag === "InputCustom" ? <InputCustom /> : <Switch />}
          </Box>
        );
      })}
      <ButtonSubmit>APPLY CHANGES</ButtonSubmit>
    </MainBox>
  );
};

export default Settings;

import { Typography } from "@mui/material";
import React, { useState } from "react";
import { ButtonSubmit, InputCustom, MainBox, Title } from "../SignUp/Style";

const Profile = () => {
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <MainBox>
      <Title>Profile</Title>
      {edit ? (
        <Typography fontSize="20px" marginTop="10px" height="44px">
          User Name
        </Typography>
      ) : (
        <InputCustom />
      )}
      {edit ? (
        <Typography fontSize="20px" marginTop="10px" height="44px">
          Email
        </Typography>
      ) : (
        <InputCustom />
      )}
      {edit ? (
        <Typography fontSize="20px" marginTop="10px" height="44px">
          Password
        </Typography>
      ) : (
        <InputCustom />
      )}
      <ButtonSubmit onClick={handleEdit}>Edit</ButtonSubmit>
    </MainBox>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import { ButtonSubmit, MainBox, Title } from "../SignUp/Style";
import { Box, Switch } from "@mui/material";
import { InputCustom } from "./style";
import { data } from "./data";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const Settings = () => {
  const [profileSettings, setProfileSettings] = useState({
    phone: "",
    email: "",
    isEmailEnabled : false,
    isPhoneEnabled: false
  });
console.log(profileSettings)
  let userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDoc = await getDoc(doc(firestore, "users", userId));
        
        if (userDoc.exists()) {
          setProfileSettings(userDoc.data().settings);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [setProfileSettings,userId]);

  const handleSave = async () => {
    await updateDoc(doc(firestore, "users", userId), { settings: profileSettings});
    }

    const handleInputChange = (e) => {
      setProfileSettings({
        ...profileSettings,
        [e.target.name]: e.target.value,
      });
    };

    const handleSwitchChange = (e) => {
      setProfileSettings({
        ...profileSettings,
        [e.target.name]: e.target.checked,
      });
    };

  return (
    <MainBox>
      <Title>Settings</Title>
      {data.map(({ id, tag, label, name, type }) => {
        return (
          <Box display="flex" alignItems="center" marginBottom="20px" key={id}>
            <label style={{ marginRight: "10px", color: "#3d4451" }}>
              {label}
            </label>
            {tag === "InputCustom" ? <InputCustom name={name} value={profileSettings[name]} type={type} onChange={handleInputChange}/> : <Switch name={name} checked={profileSettings[name]} onChange={handleSwitchChange} />}
          </Box>
        );
      })}
      <ButtonSubmit onClick={handleSave}>APPLY CHANGES</ButtonSubmit>
    </MainBox>
  );
};

export default Settings;

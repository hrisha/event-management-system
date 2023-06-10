import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonSubmit, InputCustom, MainBox, Title } from "../SignUp/Style";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
// import { updateEmail } from "firebase/auth"; TODO : Update email in firebase

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
  });

  let userId = sessionStorage.getItem("userId");
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDoc = await getDoc(doc(firestore, "users", userId));

        if (userDoc.exists()) {
          setProfileData(userDoc.data());
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [setProfileData,userId]);

  const handleEdit = () => {
    if(!edit){
      handleSave();
    }
    setEdit(!edit);
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      // Update the email in Firebase Authentication
      // await updateEmail(auth.currentUser, profileData.email);

      await updateDoc(doc(firestore, "users", userId), {
        fullName: profileData.fullName,
        email: profileData.email,
      });

      setEdit(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainBox>
      <Title>Profile</Title>
      {edit ? (
        <Typography fontSize="20px" marginTop="10px" height="44px">
          {profileData.fullName}
        </Typography>
      ) : (
        <InputCustom
          value={profileData.fullName}
          name="fullName"
          onChange={handleChange}
        />
      )}
      {edit ? (
        <Typography fontSize="20px" marginTop="10px" height="44px">
          {profileData.email}
        </Typography>
      ) : (
        <InputCustom
          value={profileData.email}
          name="email"
          onChange={handleChange}
        />
      )}
      <ButtonSubmit onClick={handleEdit}>{edit ? "Edit" : "Save"}</ButtonSubmit>
    </MainBox>
  );
};

export default Profile;

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { ref, push, child, update, set } from "firebase/database";

import { ButtonSubmit, InputCustom, MainBox, Title } from "./Style";
import auth, { database, firestore } from "../../firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ukUA } from "@mui/material/locale";
import { FormControl } from "@mui/material";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      const { user } = userCredentials;
      debugger;

      let test = await addDoc(collection(firestore, "users"), {
        fullName: userInfo.fullName,
        email: userInfo.email,
        userId: user.uid,
      });

    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
    <MainBox>
      <Title component="" variant="">
        Sign Up
      </Title>
      <InputCustom
        placeholder="Full Name"
        type="text"
        name="fullName"
        onInput={handleInput}
      />
      <InputCustom
        placeholder="Email"
        type="email"
        name="email"
        onInput={handleInput}
      />
      <InputCustom
        placeholder="password"
        type="password"
        name="password"
        onInput={handleInput}
      />
      <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
    </MainBox>
      </form>
  );
};

export default SignUp;
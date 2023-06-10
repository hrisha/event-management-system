import { createUserWithEmailAndPassword} from "firebase/auth";

import { ButtonSubmit, InputCustom, MainBox, Title } from "./Style";
import auth, { firestore } from "../../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const history = useNavigate();

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

      await setDoc(doc(firestore, "users", user.uid), {
        fullName: userInfo.fullName,
        email: userInfo.email,
        userId: user.uid,
        settings : {
          phone: "",
          email: userInfo.email,
          isEmailEnabled : false,
          isPhoneEnabled: false
        }
      });
      history("/");

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
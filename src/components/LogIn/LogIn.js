import { Typography } from "@mui/material";
import {
  MainBox,
  InputCustom,
  ButtonSubmit,
  CustomLink,
  Title,
} from "../SignUp/Style";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

const handleInput = (e) => {
  setUserInfo({
    ...userInfo,
    [e.target.name]: e.target.value,
  });
}


const handleSubmit = async (e) => {
  e.preventDefault();
  debugger;
  console.log(userInfo);
  signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
  .then(() => {
    history("/new-item")
  })
  .catch((error) => {
    let message = error.message;
    let code = error.code;
    if (code === "auth/user-not-found") {
      message = "The email you entered isn’t connected to an account.";
    } else if (code === "auth/wrong-password") {
      message = "The password you’ve entered is incorrect.";
    } else if (code === "auth/invalid-email") {
      message = "Invalid email.";
    } else if (code === "auth/missing-password") {
      message = "Enter the password.";
    }
    setErrorMessage(message);
    console.log(message)
  });
};

  return (
    <form onSubmit={handleSubmit}>
    <MainBox>
      <Title component="" variant="">
        Login
      </Title>
      {errorMessage && <Typography
        fontSize="12px"
        marginTop="10px"
        width="250px"
        textAlign="center"
        color="red"
      >
        Error : {errorMessage}
      </Typography>}
      <InputCustom name="email" placeholder="Email" type="email" onInput={handleInput}/>
      <InputCustom name="password" placeholder="password" type="password" onInput={handleInput}/>
      <ButtonSubmit type="submit">Login</ButtonSubmit>
      <Typography
        fontSize="12px"
        marginTop="10px"
        width="250px"
        textAlign="right"
        color="#3d4451"
      >
        Don't have an account <CustomLink to="/signup">Sign Up</CustomLink>
      </Typography>
    </MainBox>
    </form>
  );
};

export default LogIn;

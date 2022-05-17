import React from "react";
import "./LoginPage.scss"
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import bgLoginPage from "../../Asset/Img/carSignIn.jpg"
import { Button, Form } from "react-bootstrap";
import rectangle62 from "../../Asset/Img/Rectangle_62.png";

export const LoginPage = () => {
  const authHandle = auth;
  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(authHandle, provider)
      .then((data) => {
        if (data) {
          SignUpToApi(data.user);
        }
      })
      .catch((err) => {
        console.log(err, "Error ");
      });
  };

  const SignUpToApi = (data) => {
    var axios = require("axios");
    var value = JSON.stringify({
      username: data.displayName,
      email: data.email,
      password: data.uid,
      fullName: data.displayName,
      address: "Dumai",
      phone: "082278001173",
      gender: "Male",
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/member/create-member`,
      headers: {
        "Content-Type": "application/json",
      },
      data: value,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data, "ini dari mas william");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
    <div className="container-loginPage">
        <div className="main-loginPage">
            <section className="bg-loginPage">
                <img src={bgLoginPage} alt="#" width={975}></img>
            </section>

            <section className="input-loginPage">
            <img src={rectangle62} alt="#"></img>
          <h2 className="welcome-text">Welcome, Admin BCR</h2>
                {/* <p className="email-input">Email</p>
                <p className="password-input">Password</p>
                <a className="signIn-button" href="#">Sign In</a> */}

          <Form className="email-password-input">
            <Form.Group className="email-input" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className="email-column" type="email" placeholder="Contoh: johndee@gmail.com" />
            </Form.Group>

            <Form.Group className="password-input" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="6+ karakter" />
            </Form.Group>
            <Button className="signIn-button" variant="primary" type="submit"><a href="http://localhost:3000/Admin">
              Sign In</a>
            </Button>
          </Form>

                <GoogleButton className="google-signIn" onClick={handleGoogle} />
            
            </section>
            


        </div>
      
      
    </div>

     
    </>
  );
};


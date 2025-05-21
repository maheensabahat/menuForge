import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form.js";
import { login } from "../../services/AuthService.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const resp = await login(data);
      navigate("/result", resp);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  const fieldTypes = [
    { key: "email", label: "Email", type: "email" },
    { key: "password", label: "Password", type: "password" },
  ];
  return (
    <div className="container">
      <div className="box">
        <h1 className="text-2xl font-bold">MenuForge</h1>
        <h2 className="text-xl font-semibold">Login</h2>
        <Form
          fieldTypes={fieldTypes}
          buttonLabel={"Login"}
          onSubmit={onSubmit}
        ></Form>
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <a href="/create" className="text-green font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

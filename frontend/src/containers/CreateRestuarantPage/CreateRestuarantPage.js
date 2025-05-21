import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRestauarantPage.css";
import Form from "../../components/Form/Form.js";
import { createNewRestauarant } from "../../services/RestaurantService.js";
import { signup } from "../../services/AuthService.js";

const CreateRestuarantPage = () => {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    const { name, location, owner_name, email, password } = data;
    createNewRestauarant({ name, location })
      .then((resp) => {
        signup({
          name: owner_name,
          email,
          password,
          role: "ADMIN",
          restaurantId: resp.id,
        })
          .then((user) => {
            navigate("/result", user);
          })
          .catch((error) => {
            console.log("Unable to create new user");
          });
      })
      .catch((error) => {
        console.log("Unable to create new restaurant");
      });
  };
  const fieldTypes = [
    { key: "name", label: "Restauarant Name", type: "text" },
    { key: "location", label: "Location", type: "location" },
    { key: "owner_name", label: "Owner's Name", type: "text" },
    { key: "email", label: "Email", type: "email" },
    { key: "password", label: "Password", type: "password" },
  ];
  return (
    <div className="container">
      <div className="box">
        <h1 className="text-2xl font-bold">MenuForge</h1>
        <h2 className="text-xl font-semibold">Create New Restauarant</h2>
        <Form
          fieldTypes={fieldTypes}
          buttonLabel={"Create"}
          onSubmit={onSubmit}
        ></Form>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-green font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateRestuarantPage;

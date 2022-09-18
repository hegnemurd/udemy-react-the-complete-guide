import React from "react";
import Button from "../UI/Button.js";

import Card from "../UI/Card.js";
import "./AddUser.module.css";

const AddUser = () => {
  return (
    <Card>
      <label className="input label">Username</label>
      <input className="input input" />
      <label className="input label">Age (Years)</label>
      <input className="input" />
      <Button />
    </Card>
  );
};

export default AddUser;

import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Grid,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    role: "",
  });

  // console.log(register);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleRegister = () => {
    if (
      register.name !== "" &&
      register.email !== "" &&
      register.password !== "" &&
      register.rePassword !== ""
    ) {
      const user =
        localStorage.getItem("data") && localStorage.getItem("data").length > 0
          ? JSON.parse(localStorage.getItem("data"))
          : [];

      localStorage.setItem("data", JSON.stringify([...user, register]));
   navigate("/login")
    } else {
      alert("Please fill input field");
    }
  };

  console.log(register);
  return (
    <div>
      <Box m={3}>
        <Typography variant="h4">Registration</Typography>

        <Grid item xs={8} sx={{ width: "500px", margin: "auto" }}>
          <TextField
            type="text"
            fullWidth
            label={"Name"}
            name="name"
            id="fullWidth"
            sx={{ margin: "10px" }}
            onChange={(e) => handleInput(e)}
          />
          <TextField
            type="text"
            fullWidth
            label={"Email"}
            id="fullWidth"
            sx={{ margin: "10px" }}
            name="email"
            onChange={(e) => handleInput(e)}
          />
          <TextField
            type="password"
            fullWidth
            label={"Password"}
            id="fullWidth"
            sx={{ margin: "10px" }}
            onChange={(e) => handleInput(e)}
            name="password"
          />
          <TextField
            type="password"
            fullWidth
            label={"Re-enter Password"}
            id="fullWidth"
            sx={{ margin: "10px" }}
            onChange={(e) => handleInput(e)}
            name="rePassword"
          />
          <FormControl fullWidth margin="normal" sx={{ margin: "10px" }}>
            <InputLabel>Role</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              onChange={(e) => handleInput(e)}
              name="role"
              sx={{ textAlign: "left" }}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleRegister}
            fullWidth
            sx={{ margin: "10px" }}
          >
            Register
          </Button>

          <Typography variant="p">Or</Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            fullWidth
            sx={{ margin: "10px" }}
          >
            Login
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default Registration;

import React, { useEffect, useState } from "react";
import { TextField, Typography, Box, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [getRegisterData, setGetRegisterData] = useState([]);
  const [store, setStore] = useState([]);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // console.log(register);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    setGetRegisterData(items);
  }, []);

  // console.log(getRegisterData.email);
  const handleLogin = () => {
    getRegisterData.filter((items) => {
      if (items.email === login.email && items.password === login.password) {
        setStore(items);
      }
    });

    if (store.role === "User") {
      if (store.email === login.email && store.password === login.password) {
        navigate("/user");
      } else {
        alert("email or password is wrong");
      }
    }
    if (store.role === "Admin") {
      if (store.email === login.email && store.password === login.password) {
        navigate("/admin");
      } else {
        alert("email or password is wrong");
      }
    }
  };
  console.log(store);

  return (
    <div>
      <Box m={3}>
        <Typography variant="h5">Login</Typography>

        <Grid item xs={8} sx={{ width: "500px", margin: "auto" }}>
          <TextField
            type="text"
            fullWidth
            label={"Email"}
            id="fullWidth"
            sx={{ margin: "10px" }}
            onChange={(e) => handleInput(e)}
            name="email"
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

          <Button
            onClick={handleLogin}
            variant="contained"
            fullWidth
            sx={{ margin: "10px" }}
          >
            Login
          </Button>
          <Typography variant="p">Or</Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            fullWidth
            sx={{ margin: "10px" }}
          >
            Registeration
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;

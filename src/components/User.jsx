import React, { useState } from "react";
import { TextField, Typography, Box, Grid, Button } from "@mui/material";

const User = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    dateOfBirth: "",
    gender: "",
    fileDoc: "",
  });

  // console.log(register);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      userDetails.fullName !== "" &&
      userDetails.email !== "" &&
      userDetails.mobileNo !== "" &&
      userDetails.dateOfBirth !== "" &&
      userDetails.gender !== "" &&
      userDetails.fileDoc !== ""
    ) {
      alert("Submitted Succesfully");
      const user =
        localStorage.getItem("userdata") &&
        localStorage.getItem("userdata").length > 0
          ? JSON.parse(localStorage.getItem("userdata"))
          : [];

      localStorage.setItem("userdata", JSON.stringify([...user, userDetails]));
 
 
    } else {
      alert("Please fill input field");
    }
  };

  return (
    <div>
      <Box>
        <Typography variant="h4" m={4}>
          User Deatails
        </Typography>
        <Grid item xs={8} sx={{ width: "500px", margin: "auto" }}>
          <TextField
            type="text"
            fullWidth
            label={"Full name"}
            id="fullWidth"
            sx={{ margin: "10px" }}
            name="fullName"
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
            type="text"
            fullWidth
            label={"Mobile No."}
            id="fullWidth"
            sx={{ margin: "10px" }}
            name="mobileNo"
            onChange={(e) => handleInput(e)}
          />
          <TextField
            type="date"
            fullWidth
            id="fullWidth"
            sx={{ margin: "10px" }}
            name="dateOfBirth"
            onChange={(e) => handleInput(e)}
          />
          <TextField
            type="text"
            fullWidth
            label={"Gender"}
            id="fullWidth"
            sx={{ margin: "10px" }}
            name="gender"
            onChange={(e) => handleInput(e)}
          />
          <TextField
            type="file"
            fullWidth
            id="fullWidth"
            sx={{ margin: "10px" }}
            name="fileDoc"
            onChange={(e) => handleInput(e)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{ margin: "10px" }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default User;

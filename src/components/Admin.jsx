import React, { useEffect, useState } from "react";
import { Button, Typography, Box, Grid, Paper } from "@mui/material";

const Admin = () => {
  const [userGetData, setUserGetData] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userdata"));
    setUserGetData(items);
  }, []);

  return (
    <div>
      <Box>
        <Typography variant="h4">Admin Panel</Typography>

        <Grid item xs={8} sx={{ width: "500px", margin: "50px auto" }}>
          {!userGetData ? (
            <h1>No Data</h1>
          ) : (
            userGetData?.map((data) => {
              return (
                <Paper key={data} sx={{ padding: "10px", background: "aqua", margin:"10px" }}>
                  <Typography varinat="h6" sx={{ padding: "2px" }}>
                    Full Name:{data?.fullName}
                  </Typography>
                  <Typography varinat="h6" sx={{ padding: "2px" }}>
                    Email:{data?.email}
                  </Typography>
                  <Typography varinat="h6" sx={{ padding: "2px" }}>
                    Mobile No. :{data?.mobileNo}
                  </Typography>
                  <Typography varinat="h6" sx={{ padding: "2px" }}>
                    Data of Birth:{data?.dateOfBirth}
                  </Typography>
                  <Typography varinat="h6" sx={{ padding: "2px" }}>
                    Gender:{data?.gender}
                  </Typography>
                  <Typography varinat="h6" sx={{ padding: "2px" }}>
                    Fil Document:{data?.fileDoc}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      margin: "5px",
                      padding: "2px",
                      width: "100px",
                      background: "green",
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      margin: "5px",
                      padding: "2px",
                      width: "100px",
                      background: "red",
                    }}
                  >
                    Reject
                  </Button>
                </Paper>
              );
            })
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Admin;

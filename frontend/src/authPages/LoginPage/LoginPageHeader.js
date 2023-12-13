import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography
        sx={{
          color: "white",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "30px",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        Welcome Back!
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "20px",
          textAlign: "center",
        }}
      >
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginPageHeader;

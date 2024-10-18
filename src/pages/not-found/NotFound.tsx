import React, { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = useCallback(() => {
    navigate("/profile-display");
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>

      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for does not exist.
      </Typography>

      <CustomButton id="btn-not-found" name="Login" onClick={goToLogin} />
    </Box>
  );
};

export default NotFound;

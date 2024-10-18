import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, Typography, Container } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import constants from "../../constants/constants";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(10, "Username must not exceed 10 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(10, "Password must not exceed 10 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/[a-z]/, "Password must have at least one lowercase letter")
    .matches(/\d/, "Password must have at least one number")
    .matches(/[\W_]/, "Password must have at least one special character")
    .required("Password is required"),
});

interface LoginValues {
  username: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit, setError } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginValues> = ({ username, password }) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    if (username !== "Admin" && password !== "Admin@123") {
      setError("username", { message: "Invalid username!" });
      setError("password", { message: "Invalid password!" });
    } else if (username !== "Admin") {
      setError("username", { message: "Invalid username!" });
    } else if (password !== "Admin@123") {
      setError("password", { message: "Invalid password!" });
    } else navigate("/profile-form");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "2rem",
          boxShadow: 3,
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {constants.Login}
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <CustomTextField
            id="txt-username"
            name="username"
            control={control}
            label="Username"
          />

          <CustomTextField
            id="txt-password"
            name="password"
            control={control}
            label="Password"
          />

          <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
            <CustomButton id="login-btn" name="Login" type="submit" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

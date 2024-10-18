import React, { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";
import { useProfile } from "../../context/ProfileContext";
import constants from "../../constants/constants";

const profileSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  age: Yup.number()
    .nullable()
    .typeError("Age must be a valid number")
    .min(0, "Age must be a positive number")
    .optional(),
});

interface ProfileFormValues {
  name: string;
  email: string;
  age?: number | null;
}

const ProfileForm: React.FC = () => {
  const { addProfile } = useProfile();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<ProfileFormValues>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      age: null,
    },
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    addProfile({ ...data, id: data?.email });
    navigate("/profile-display");
  };

  const goToProfiles = useCallback(() => {
    navigate("/profile-display");
  }, [navigate]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: 5,
      }}
    >
      <Typography variant="h6" component="h6">
        {constants.AddProfile}
      </Typography>

      <Box my={1}>
        <CustomButton
          id="login-btn2"
          name="Go To Profiles"
          onClick={goToProfiles}
        />
      </Box>

      <CustomTextField id="name" label="Name" name="name" control={control} />

      <CustomTextField
        id="email"
        label="email"
        name="email"
        control={control}
      />

      <CustomTextField id="age" label="age" name="age" control={control} />

      <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
        <CustomButton type="submit" id="submit" name="Submit" />
      </Box>
    </Box>
  );
};

export default ProfileForm;

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Profile, useProfile } from "../../context/ProfileContext";
import CustomButton from "../../components/CustomButton";
import constants from "../../constants/constants";

const ProfileDisplay: React.FC = () => {
  const { profiles, deleteProfile } = useProfile();
  const navigate = useNavigate();

  const handleDelete = useCallback(
    (id: string) => {
      deleteProfile(id);
    },
    [deleteProfile]
  );

  const goToCreateProfile = useCallback(() => {
    navigate("/profile-form");
  }, [navigate]);

  if (profiles.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6" component="h6">
          {constants.NoProfilesFound}
        </Typography>
        <Box my={1}>
          <CustomButton
            id="btn-create-profile"
            name="Create Profile"
            onClick={goToCreateProfile}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box
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
        {constants.ProfileList}
      </Typography>

      <Box my={1}>
        <CustomButton
          id="btn-create-profile-2"
          name="Create Profile"
          onClick={goToCreateProfile}
        />
      </Box>

      <List>
        {profiles.map((profile: Profile) => (
          <ListItem
            key={profile.id}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemText
              primary={`${profile.name} (${profile.email})`}
              secondary={
                profile.age ? `Age: ${profile.age}` : "Age: Not provided"
              }
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(profile.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProfileDisplay;

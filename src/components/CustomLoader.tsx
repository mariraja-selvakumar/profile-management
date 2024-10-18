import { Box, CircularProgress } from "@mui/material";

const CustomLoader = () => (
  <Box
    sx={{
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);

export default CustomLoader;

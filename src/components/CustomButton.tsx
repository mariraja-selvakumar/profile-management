import { Button } from "@mui/material";
import { memo } from "react";

interface CustomButtonP {
  id: string;
  name: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const CustomButton = ({
  id,
  name,
  onClick = () => {},
  type = "button",
}: CustomButtonP) => {
  return (
    <Button
      id={id}
      onClick={onClick}
      type={type}
      variant="contained"
      color={type === "submit" ? "success" : "primary"}
      sx={{ textTransform: "none" }}
    >
      {name}
    </Button>
  );
};

export default memo(CustomButton);

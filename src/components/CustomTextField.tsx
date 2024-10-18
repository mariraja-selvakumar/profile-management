import { TextField } from "@mui/material";
import { memo } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface CustomTextFieldP<TField extends FieldValues> {
  name: Path<TField>;
  control: Control<any>;
  id: string;
  label: string;
}

const CustomTextField = <TField extends FieldValues>({
  name,
  control,
  id,
  label,
}: CustomTextFieldP<TField>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          id={id}
          label={label}
          variant="outlined"
          size="small"
          error={Boolean(error)}
          helperText={error?.message}
          fullWidth
          type={name === "password" ? "password" : "text"}
          {...field}
          sx={{ mb: 2 }}
        />
      )}
    />
  );
};

export default memo(CustomTextField);

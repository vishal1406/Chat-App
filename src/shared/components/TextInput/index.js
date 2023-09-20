import React from "react";
import { IconButton, TextField } from "@mui/material";

const CustomTextInput = ({
   variant,
   value,
   label,
   placeholder,
   required,
   fullWidth,
   error,
   helperText,
   handleChange,
   disabled,
   inputType,
   endIcon,
   endIconAction,
   handleKeyPress,
}) => {
   return (
      <TextField
         type={inputType || "text"}
         error={error || null}
         required={required || false}
         label={label}
         placeholder={placeholder}
         value={value}
         variant={variant || "outlined"}
         fullWidth={fullWidth || true}
         helperText={helperText || null}
         disabled={disabled || false}
         onChange={handleChange}
         InputProps={{
            endAdornment: endIcon ? (
               <IconButton edge="end" size="small" onClick={endIconAction}>
                  {endIcon}
               </IconButton>
            ) : null,
         }}
         onKeyPress={(e) => {
            if (e.key === "Enter") {
               if (e.target.value && handleKeyPress) handleKeyPress();
               else e.preventDefault();
            }
         }}
      />
   );
};

export default CustomTextInput;

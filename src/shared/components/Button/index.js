import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledButton = styled(Button)(() => ({
   "&.MuiButton-root": {
      boxShadow: "none",
      fontWeight: 400,
   },
}));

const CustomButton = ({ variant, className, size, label, startIcon, endIcon, disabled, handleClick }) => {
   return (
      <StyledButton
         variant={variant || "contained"}
         className={className}
         size={size || "small"}
         startIcon={startIcon}
         endIcon={endIcon}
         disabled={disabled || false}
         onClick={handleClick}
      >
         {label}
      </StyledButton>
   );
};

export default CustomButton;

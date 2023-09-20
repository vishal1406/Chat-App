import { Drawer, Box, styled } from "@mui/material";
import React, { Fragment } from "react";

const StyledBox = styled(Box)({
   height: "100%",
   display: "flex",
   flexDirection: "column",
   width: "23.125rem",
   padding: "0.25rem 0.375rem",
});

const CustomDrawer = ({ children, anchor, isDrawerOpen, handleToggleDrawer }) => {
   return (
      <Fragment>
         <Drawer
            anchor={anchor || "right"}
            open={isDrawerOpen}
            variant="temporary"
            onClose={handleToggleDrawer}
            ModalProps={{ keepMounted: true }}
            BackdropProps={{ invisible: true }}
            sx={{
               "& .MuiDrawer-paper": {
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  boxShadow: "0px 3px 6px #00000029",
                  opacity: 1,
               },
            }}
         >
            <StyledBox>{children}</StyledBox>
         </Drawer>
      </Fragment>
   );
};

export default CustomDrawer;

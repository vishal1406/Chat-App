import React from "react";
import { Grid } from "@mui/material";
import { ChatWindow, ContactList } from "../containers";

const Chat = () => {
   return (
      <Grid container>
         <Grid xs={3} item sx={{ height: "100vh", borderRight: "1px solid #ccc" }}>
            <ContactList />
         </Grid>
         <Grid xs={9} item>
            <ChatWindow />
         </Grid>
      </Grid>
   );
};

export default Chat;

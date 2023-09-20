import React from "react";
import { Grid } from "@mui/material";
import { ChatWindow } from "../containers";

const Chat = () => {
   return (
      <Grid container>
         <Grid xs={3} item>
            Contact List
         </Grid>
         <Grid xs={9} item>
            <ChatWindow />
         </Grid>
      </Grid>
   );
};

export default Chat;

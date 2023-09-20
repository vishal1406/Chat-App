import React from "react";
import { List, ListItem, ListItemAvatar, Avatar, Typography, Grid } from "@mui/material";

const ContactList = ({ contacts }) => {
   return (
      <Grid container direction="column">
         <List>
            {contacts.map((contact, index) => (
               <ListItem
                  key={index}
                  sx={{
                     borderBottom: "1px solid #ccc",
                     padding: "0.75rem",
                  }}
               >
                  <ListItemAvatar>
                     <Avatar alt={contact.name} src={contact.avatarSrc} />
                  </ListItemAvatar>
                  <div style={{ marginLeft: "1rem" }}>
                     <Typography variant="subtitle1">{contact.name}</Typography>
                  </div>
               </ListItem>
            ))}
         </List>
      </Grid>
   );
};

export default ContactList;

import React, { Fragment } from "react";
import { Grid, Box } from "@mui/material";
import { CustomDrawer, CustomTextInput } from "../../../shared";
import MessageList from "./MessageList";
import { sxStyles } from "./style";

const ChatWindow = ({
   input,
   messages,
   isDrawerOpen,
   openedReplyIndex,
   replyInput,
   setInput,
   setReplyInput,
   handleMessageSend,
   handleReplyMessage,
   handleToggleDrawer,
}) => {
   return (
      <Fragment>
         <Grid
            sx={sxStyles.chatWindowParentGrid}
            container
            direction="column"
            justifyContent="space-between"
            style={{ height: "100%" }}
         >
            <Grid item sx={{ flex: 1, overflowY: "auto" }}>
               <MessageList messages={messages} handleToggleDrawer={handleToggleDrawer} />
            </Grid>
            <Grid item>
               <CustomTextInput
                  placeholder="Type a message"
                  fullWidth
                  value={input}
                  handleChange={(e) => setInput(e.target.value)}
                  showEndIcon={true}
                  endIconAction={handleMessageSend}
                  handleKeyPress={handleMessageSend}
               />
            </Grid>
         </Grid>
         <CustomDrawer isDrawerOpen={isDrawerOpen} handleToggleDrawer={handleToggleDrawer} hideBackDrop={true}>
            {openedReplyIndex >= 0 && (
               <Box sx={{ padding: "0.75rem" }} flexGrow={1} overflow="auto">
                  <MessageList messages={messages[openedReplyIndex]?.replies || []} />
               </Box>
            )}
            <Box>
               <CustomTextInput
                  placeholder="Type a message"
                  fullWidth
                  value={replyInput}
                  handleChange={(e) => setReplyInput(e.target.value)}
                  showEndIcon={true}
                  endIconAction={handleReplyMessage}
                  handleKeyPress={handleReplyMessage}
               />
            </Box>
         </CustomDrawer>
      </Fragment>
   );
};

export default ChatWindow;

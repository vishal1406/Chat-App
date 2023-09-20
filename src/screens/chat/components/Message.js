import React from "react";
import { Paper, Typography, Box, IconButton, Tooltip } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import { CustomButton } from "../../../shared";
import { ACTION_TYPE } from "../constants";
import { sxStyles } from "./style";

const Message = ({ user, time, content, replies, currentIndex, handleToggleDrawer }) => {
   return (
      <Paper elevation={3} sx={sxStyles.messagePaper}>
         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
               <Typography variant="subtitle2" style={{ fontSize: "0.75rem" }}>
                  {user} - {time}
               </Typography>
            </Box>
            <Box>
               {handleToggleDrawer && (
                  <Box sx={sxStyles.messageReplyBox}>
                     <Tooltip title="Reply">
                        <IconButton onClick={() => handleToggleDrawer(currentIndex, ACTION_TYPE.REPLY_TO_MESSAGE)}>
                           <ReplyIcon />
                        </IconButton>
                     </Tooltip>
                  </Box>
               )}
            </Box>
         </Box>
         <Typography>{content}</Typography>
         {handleToggleDrawer && replies.length ? (
            <Box sx={{ marginLeft: "-0.25rem" }}>
               <CustomButton
                  variant="text"
                  label={"View Replies"}
                  handleClick={() => handleToggleDrawer(currentIndex, ACTION_TYPE.VIEW_MESSAGE)}
               />
            </Box>
         ) : null}
      </Paper>
   );
};

export default Message;

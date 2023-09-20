import React, { Fragment } from "react";
import Message from "./Message";

const MessageList = ({ messages, handleToggleDrawer }) => {
   return (
      <Fragment>
         {messages.map((message, index) => (
            <Message key={message.id} {...message} currentIndex={index} handleToggleDrawer={handleToggleDrawer} />
         ))}
      </Fragment>
   );
};

export default MessageList;

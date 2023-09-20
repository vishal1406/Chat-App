import React, { useState } from "react";
import { ChatWindowComponent } from "../components";

const ChatWindow = () => {
   const [input, setInput] = useState("");
   const [messages, setMessages] = useState([]);
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const [replyInput, setReplyInput] = useState("");
   const [openedReplyIndex, setOpenedReplyIndex] = useState(null);

   const handleMessageSend = () => {
      if (input.trim() === "") return;
      setMessages([
         ...messages,
         { id: Date.now(), user: "Vishal", time: new Date(), content: input, replies: [] },
      ]);
      setInput("");
   };

   const handleReplyMessage = () => {
      if (replyInput.trim() === "") return;
      messages[openedReplyIndex].replies.push({
         id: Date.now(),
         user: "Vishal",
         time: new Date(),
         content: replyInput,
      });
      setMessages(messages);
      setReplyInput("");
   };

   const handleToggleDrawer = (currentIndex, actionType) => {
      setIsDrawerOpen(!isDrawerOpen);
      if (currentIndex >= 0) setOpenedReplyIndex(currentIndex);
      else setOpenedReplyIndex(null);
   };

   return (
      <ChatWindowComponent
         input={input}
         messages={messages}
         isDrawerOpen={isDrawerOpen}
         openedReplyIndex={openedReplyIndex}
         replyInput={replyInput}
         setInput={setInput}
         setReplyInput={setReplyInput}
         handleMessageSend={handleMessageSend}
         handleReplyMessage={handleReplyMessage}
         handleToggleDrawer={handleToggleDrawer}
      />
   );
};

export default ChatWindow;

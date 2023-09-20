import React from "react";
import { ContactListComponent } from "../components";
const contacts = [{ name: "Tech Team", avatarSrc: "https://i.pravatar.cc/300" }];
const ContactList = () => {
   return <ContactListComponent contacts={contacts} />;
};

export default ContactList;

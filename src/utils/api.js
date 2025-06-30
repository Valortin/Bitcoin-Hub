import axios from "axios";

export const fetchMessages = async () => {
  return [{ text: "Welcome to Bitcoin-Hub!", sender: "Admin" }];
};

export const sendMessage = async (message) => {
  console.log("Message sent:", message);
  return true;
};
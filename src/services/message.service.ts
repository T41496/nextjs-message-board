import getConfig from "next/config";
import { Message } from "@/src/types";
import handleResponse from "./handleResponse";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/messages`;

export const addMessage = (message: Message) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  };
  return fetch(baseUrl, requestOptions).then(handleResponse);
};

export const getMessages = () => {
  return fetch(baseUrl, { method: "GET" }).then(handleResponse);
};

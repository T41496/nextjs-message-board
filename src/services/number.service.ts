import getConfig from "next/config";
import handleResponse from "./handleResponse";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/numbers`;

export const addNumber = (numbers: { numbers: number[] }) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(numbers),
  };
  return fetch(baseUrl, requestOptions).then(handleResponse);
};

export const getNumbers = () => {
  return fetch(baseUrl, { method: "GET" }).then(handleResponse);
};

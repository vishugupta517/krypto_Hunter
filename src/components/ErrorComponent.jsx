import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const Error = ({ error, message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      top={"30%"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"300px"}
      borderRadius={"50"}
    >
      <AlertIcon />
      {error} {message}
    </Alert>
  );
};

export default Error;

import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"28"}
      px={"16"}
      py={["10", "1.5"]}
    >
      <Text
        fontSize={["3xl", "6xl"]}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
      >
        KryptoHUNTER
      </Text>
    </Box>
  );
};

export default Footer;

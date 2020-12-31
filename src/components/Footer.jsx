import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Flex bg="gray.500" w="100vw" p="4" color="white" justifyContent="center">
      <Text fontSize="md" color="gray.900" cursor="pointer">
        Made by Ramy
      </Text>
    </Flex>
  );
}

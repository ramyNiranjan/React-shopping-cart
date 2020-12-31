import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

export default function ChakraAlert() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Internal Server Error</AlertTitle>
      <AlertDescription>
        Try to refresh the page or Please try again later.
      </AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
}

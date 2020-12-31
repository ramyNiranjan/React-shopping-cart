import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export default function OrderModal({ isOpen, onClose }) {
  const history = useHistory();
  const returnToHome = () => {
    onClose();
    history.push("/");
  };
  return (
    <Modal isOpen={isOpen} onClose={returnToHome}>
      <ModalOverlay />
      <ModalContent bg="gray.200">
        <ModalHeader>Thank You</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="xl">Your Order is on the way</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={returnToHome}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

import React, { useContext } from "react";
import { Flex, Button, useDisclosure, chakra } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import DrawerSlider from "./DrawerSlider";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { itemCount } = useContext(CartContext);
  const ChakraLink = chakra(Link);
  return (
    <Flex
      bg="gray.500"
      w="100vw"
      p="4"
      color="white"
      justifyContent="space-between"
      fontSize="20px"
      alignItems="center"
      position="sticky"
    >
      <ChakraLink to="/" cursor="pointer">
        Home
      </ChakraLink>
      <Button
        cursor="pointer"
        leftIcon={<FiShoppingCart />}
        bg="gray.800"
        variant="null"
        fontSize="20px"
        onClick={onOpen}
        rightIcon={itemCount}
      />
      <DrawerSlider
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      />
    </Flex>
  );
}

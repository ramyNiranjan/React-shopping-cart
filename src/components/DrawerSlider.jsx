import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Tag,
  Button,
  Text,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";

export default function DrawerSlider({ isOpen, placement, onClose, btnRef }) {
  const { cartItems, totalSum, itemCount, clearCart } = useContext(CartContext);
  const history = useHistory();
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.200">My Shopping Cart</DrawerHeader>

          <DrawerBody>
            {!cartItems.length ? (
              <Flex w="100%" justify="center" align="center" h="100%">
                <Text fontSize="3xl">No items in the cart</Text>
              </Flex>
            ) : (
              cartItems.map((prod, idx) => <CartItem key={idx} {...prod} />)
            )}
          </DrawerBody>

          <DrawerFooter bg="gray.200">
            <Flex direction="column" alignItems="space-between" w="100%">
              <Flex justify="space-between" mb="4">
                <Tag p="2" bg="teal.100">
                  Total Items: {itemCount}
                </Tag>
                <Tag bg="teal.100"> Total Price: {totalSum}</Tag>
              </Flex>
              <Button
                isDisabled={!cartItems.length}
                colorScheme="teal"
                mb="4"
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
              <Button
                colorScheme="teal"
                onClick={() => history.push("/checkout")}
                isDisabled={!cartItems.length}
              >
                Checkout
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

import React, { useContext } from "react";
import {
  Text,
  Image,
  Box,
  chakra,
  Flex,
  Button,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Layout from "../components/Layout";
import { CartContext } from "../context/CartContext";
import OrderModal from "../components/OrderModal";

const ChakraTable = chakra(Table);
const ChakraThead = chakra(Thead);
const ChakraTbody = chakra(Tbody);
const ChakraTr = chakra(Tr);
const ChakraTh = chakra(Th);
const ChakraTd = chakra(Td);

export default function Checkout() {
  const { cartItems, totalSum, clearCart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const orderClear = () => {
    onOpen();
    clearCart();
  };
  return (
    <Layout>
      <Box w="100%" h="100%" px="2" mt="4">
        <Heading align="center" mb="2" size="lg">
          <Text color="gray.600">Welcome to Checkout</Text>
        </Heading>
        <ChakraTable bg="gray.50" wordBreak="break-all" variant="simple">
          <ChakraThead align="center">
            <ChakraTr>
              <ChakraTh py="2">Image</ChakraTh>
              <ChakraTh>Product</ChakraTh>
              <ChakraTh>Quantity</ChakraTh>
              <ChakraTh>Price</ChakraTh>
            </ChakraTr>
          </ChakraThead>

          <ChakraTbody align="center">
            {cartItems &&
              cartItems.map(({ url, title, quantity, price }, idx) => {
                return (
                  <ChakraTr key={idx}>
                    <ChakraTd>
                      <Image src={url} boxSize="50px" objectFit="cover" />
                    </ChakraTd>
                    <ChakraTd>{title}</ChakraTd>
                    <ChakraTd>{quantity}</ChakraTd>
                    <ChakraTd>{price}</ChakraTd>
                  </ChakraTr>
                );
              })}
          </ChakraTbody>
        </ChakraTable>
        <Flex p="6" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" mr="6">
            Total Price: {totalSum}
          </Text>
          <Button
            colorScheme="teal"
            onClick={orderClear}
            isDisabled={!cartItems.length}
          >
            Order
          </Button>
          <OrderModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Box>
    </Layout>
  );
}

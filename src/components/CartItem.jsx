import React, { useContext } from "react";
import { Box, Flex, Image, Text, IconButton, Tag } from "@chakra-ui/react";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { CartContext } from "../context/CartContext";

export default function CartItem({ ...prod }) {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <Box>
      <Flex w="150px" bg="gray.100" w="100%" justify="space-between" mb="2">
        <Image
          boxSize="100px"
          src={prod.url}
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Flex direction="column" ml="2" justify="space-evenly" flex="1">
          <Text fontSize="md">{prod.title}</Text>
          <Flex>
            <Text>Price:{prod.price}</Text>
          </Flex>

          <Flex justify="space-between" w="75%">
            <IconButton
              colorScheme="blue"
              aria-label="add prod"
              icon={prod.quantity === 1 ? <BiTrash /> : <BiMinus />}
              onClick={() =>
                prod.quantity === 1 ? removeProduct(prod) : decrease(prod)
              }
              isRound
              size="xs"
            />
            <Tag bg="gray.200">Qty:{prod.quantity}</Tag>
            <IconButton
              colorScheme="blue"
              aria-label="remove prod"
              icon={<BiPlus />}
              onClick={() => increase(prod)}
              isRound
              size="xs"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

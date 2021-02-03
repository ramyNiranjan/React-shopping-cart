import { Box, Text, Image, Button, Flex, Tag } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ id, price, title, image_url }) {
  const cartProd = { title, price, image_url, id };
  const { addProduct, cartItems, increase, isInCart } = useContext(CartContext);
  return (
    <Box pos="relative" bg="gray.50">
      <Image
        w="100%"
        h="80%"
        objectFit="cover"
        src={image_url}
        alt="image"
        fallbackSrc="https://via.placeholder.com/150"
      />
      <Flex
        px="2"
        w="100%"
        pos="absolute"
        top="5"
        justifyContent="space-between"
      >
        <Tag p="2" bg="gray.50" color="gray.900">
          <Text fontSize="sm">{title}</Text>
        </Tag>
        <Tag p="1" bg="gray.50" color="gray.900">
          <Text fontSize="sm">{`$${price}`}</Text>
        </Tag>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Button
          colorScheme="teal"
          mt="1"
          variant="outline"
          onClick={() =>
            !isInCart(cartProd, cartItems)
              ? addProduct(cartProd)
              : increase(cartProd)
          }
        >
          {!isInCart(cartProd, cartItems) ? "Add to Cart" : "Add More"}
        </Button>
      </Flex>
    </Box>
  );
}

import React from "react";
import { SimpleGrid, Text, Box, Skeleton, Heading } from "@chakra-ui/react";

import Layout from "../components/Layout";
import fetchProds from "../utils/fetchProducts";
import ProductCard from "../components/ProductCart";
import ChakraAlert from "../components/ChakraAlert";

export default function Home() {
  const { products, isLoading, isError } = fetchProds();
  console.log(isLoading);
  return (
    <div>
      <Layout>
        <Box p="6">
          {isLoading && (
            <Heading fontSize="lg" mb="2" align="center">
              Please wait we are preparing products😊
            </Heading>
          )}
          <SimpleGrid minChildWidth="250px" spacing="20px" autoRows="250px">
            {isError && <ChakraAlert />}
            {isLoading &&
              Array(10)
                .fill(0)
                .map((x) => <Skeleton />)}
            {products &&
              products.map((items, idx) => (
                <>
                  <ProductCard key={idx} {...items} />
                </>
              ))}
          </SimpleGrid>
        </Box>
      </Layout>
    </div>
  );
}

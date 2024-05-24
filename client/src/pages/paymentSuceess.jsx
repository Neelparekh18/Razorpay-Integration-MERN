import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      background="green.100"
    >
      <VStack
        spacing={4}
        boxShadow="lg"
        p={8}
        borderRadius="md"
        background="white"
      >
        <Heading as="h1" size="xl" color="green.600">
          Payment Successful!
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Thank you for your purchase. Your transaction was successful.
        </Text>
        {/* <Text fontSize="md" color="gray.500">
          A confirmation email has been sent to your registered email address.
        </Text> */}
        <Link to={"/"}>
          <Button colorScheme="green">Continue Shopping</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;

"use client";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
  StackProps,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { ChackIcon } from "@/icon/Icon";
export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as={"li"} spacing="20px" {...rest}>
      <Icon as={ChackIcon} w="20px" h="20px" />
      <Text>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <Box mx={"24px"}>
      <Box
        maxW={"994px"}
        margin="auto"
        mt="-256px"
        borderRadius={"12px"}
        overflow="hidden"
        boxShadow={
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }
      >
        <Flex direction={["column", "column", "row"]}>
          <Box textAlign={"center"} bg="#F0EAFB" p={"60px"}>
            <Text fontWeight={"800"} fontSize="24px">
              Premium Pro
            </Text>
            <Heading as={"h3"} fontSize={["5xl","5xl","6xl"]} mt={"16px"}>
              $329
            </Heading>
            <Text color={"#171923"} fontSize="18px" mt={"8px"}>
              billed just once
            </Text>
            <Button colorScheme={"purple"} size="lg" width={"282px"} mt="24px">
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize={"18px"} bg="white">
            <Text textAlign={"left"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

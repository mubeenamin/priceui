"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box pb={"112px"} as="section">
    <Box
      
      bg={"#6B46C1"}
      textAlign={["left","left","center"]}
      pt={"90px"}
      pb="198px"
      px={"32px"}
    >
      <Heading fontWeight={"800"} fontSize={["3xl","3xl","5xl"]} color={"#F7FAFC"}>
        Simple pricing for your business
      </Heading>
      <Text fontWeight={"500"} fontSize={["lg","lg","2xl"]} color={"#F7FAFC"} pt="16px">
        Plans that are carefully crafted to suit your buisness
      </Text>
    </Box>
    </Box>
  );
}

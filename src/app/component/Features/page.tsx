"use client";
import React, { ElementType } from "react";
import { HStack, Icon, StackProps, Text, Box, Flex } from "@chakra-ui/react";
import {
  MoneyBackGuarantee,
  HassleFree,
  MonthlySubscription,
} from "@/icon/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}
function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text fontSize={"18px"} fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box maxW={"1024px"} margin="auto" pt={"48px"} pb="48px">
      <Flex direction={["column", "column", "row"]} px="48px" py="48px">
        <Feature icon={MoneyBackGuarantee}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFree}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscription}>
          No monthly subscription Pay once and for all
        </Feature>
      </Flex>
    </Box>
  );
}

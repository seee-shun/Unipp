import React from "react";
import { Box, Text } from "@chakra-ui/layout";

type Props = {
  title?: string;
};

export const EventBox: React.FC<Props> = (props) => {
  return (
    <>
      <Text fontWeight="bold" fontSize="l" color="#4e4e4e">
        {props.title}
      </Text>
      <Box p="1rem" borderRadius="10px" bgColor="#f4f4f4" textAlign="center">
        {props.children}
      </Box>
    </>
  );
};

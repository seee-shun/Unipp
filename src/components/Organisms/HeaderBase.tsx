import React from "react";
import { Flex } from "@chakra-ui/layout";

export const HeaderBase: React.FC = (props) => {
  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      zIndex="200"
      p="1rem"
      w="100%"
      justifyContent="center"
      alignContent="center"
      bgColor="rgba(255, 255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
    >
      {props.children}
    </Flex>
  );
};

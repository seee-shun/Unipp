import React from "react";
import { Flex } from "@chakra-ui/layout";

export const HeaderBase: React.FC = (props) => {
  return (
    <Flex
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      h={20}
      paddingX={4}
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

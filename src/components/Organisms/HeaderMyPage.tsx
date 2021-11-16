import React from "react";
import { HeaderBack as Base } from "./HeaderBack";
import { SettingsIcon } from "@chakra-ui/icons";
import { Spacer, Flex } from "@chakra-ui/layout";

export const HeaderMyPage: React.FC = (props) => {
  return (
    <>
      <Base>
        <Flex alignItems="center">
          {/* 後で追加 */}
          {/* <Spacer /> */}
          {/* <SettingsIcon color="#4e4e4e" w={6} h={6} /> */}
        </Flex>
      </Base>
    </>
  );
};

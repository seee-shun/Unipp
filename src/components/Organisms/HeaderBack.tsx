import React from "react";
import { HeaderBase as Base } from "./HeaderBase";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Spacer, Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";

export const HeaderBack: React.FC = (props) => {
  const router = useRouter();
  return (
    <>
      <Base>
        <Flex alignItems="center">
          <ChevronLeftIcon
            color="#4e4e4e"
            w={8}
            h={8}
            onClick={() => {
              router.back();
            }}
          />
        </Flex>
        <Spacer />
        {props.children}
      </Base>
    </>
  );
};

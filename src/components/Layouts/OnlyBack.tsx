import { Container, Flex, Spacer } from "@chakra-ui/layout";
import { HeaderBack as Header } from "../Organisms/HeaderBack";
import { useRouter } from "next/router";
import React from "react";

export const OnlyBack: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Container as="main" mt="80px" p="0" maxW={{ lg: "container.lg" }}>
        {children}
      </Container>
    </>
  );
};

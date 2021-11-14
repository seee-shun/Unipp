import React from "react";
import { Container } from "@chakra-ui/layout";
import { HeaderBasic as Header } from "../Organisms/HeaderBasic";

export const Basic: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container as="main" mt="20" p="0" maxW={{ lg: "container.lg" }}>
        {children}
      </Container>
    </>
  );
};

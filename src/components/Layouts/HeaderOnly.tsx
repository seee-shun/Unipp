import { Container } from "@chakra-ui/layout";
import React from "react";
import { AppHeader as Header } from "../Organisms/AppHeader";

export const HeaderOnly: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container as="main" mt="20" p="0" maxW={{ lg: "container.lg" }}>
        {children}
      </Container>
    </>
  );
};

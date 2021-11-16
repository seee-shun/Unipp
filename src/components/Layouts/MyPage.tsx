import { Container } from "@chakra-ui/layout";
import { HeaderMyPage as Header } from "../Organisms/HeaderMyPage";
import React from "react";

export const MyPage: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container as="main" p="0" maxW={{ lg: "container.lg" }}>
        {children}
      </Container>
    </>
  );
};

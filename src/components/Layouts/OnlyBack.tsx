import { Container } from "@chakra-ui/layout"
import { HeaderBack as Header } from "../Organisms/HeaderBack"
import React from "react"

export const OnlyBack: React.FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container as="main" p="0" maxW={{ lg: "container.lg" }}>
        {children}
      </Container>
    </>
  )
}

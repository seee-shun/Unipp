import React from "react"
import { Container } from "@chakra-ui/layout"
import { HeaderBasic as Header } from "../Organisms/HeaderBasic"
import { useRouter } from "next/router"

export const Basic: React.FC = ({ children }) => {
  const router = useRouter()
  let container = "container"
  container = router.pathname === "/" ? "container" : "container.lg"
  return (
    <>
      <Header />
      <Container as="main" mt="0" p="0" maxW={{ lg: container }}>
        {children}
      </Container>
    </>
  )
}

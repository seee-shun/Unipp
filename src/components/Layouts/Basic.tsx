import React from "react"
import { Container } from "@chakra-ui/layout"
import { HeaderBasic as Header } from "../Organisms/HeaderBasic"
import { useRouter } from "next/router"

type Props = {
  showIcon?: boolean
}

export const Basic: React.FC<Props> = ({ children, showIcon = true }) => {
  const router = useRouter()
  let container = "container"
  container = router.pathname === "/" ? "container" : "container.lg"
  return (
    <>
      <Header showIcon={showIcon} />
      <Container as="main" mt="0" p="0" maxW={{ lg: container }}>
        {children}
      </Container>
    </>
  )
}

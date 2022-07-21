import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout"
import { Basic } from "components/Layouts/Basic"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { ReactElement, ReactNode } from "react"
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Created = () => {
  const router = useRouter()
  return (
    <Flex>
      <Box>
        <Heading as="h1" size="lg" textAlign="center">
          アカウントの作成が完了しました。
        </Heading>
        <Text py={4} fontSize="md">
          アカウント認証メールを送信しました。メールを確認してください。
        </Text>
        <Stack spacing={4} py={6} px={10}>
          <PrimaryButton onClick={() => router.push("../signIn")}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
}

Created.getLayout = (page: ReactElement) => {
  return <Basic showIcon={false}>{page}</Basic>
}

export default Created

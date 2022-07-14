import type { NextPage } from "next"
import Head from "next/head"
import { Box, Flex, Heading } from "@chakra-ui/layout"

const ReuseDetails: NextPage = () => {
    return (
        <>
            <Head>
                <title>詳細ページ | Unireuse</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Flex>
                <Box>
                    <Heading as="h1" size="lg" textAlign="center">
                        Unireuse Detail
                    </Heading>
                </Box>
            </Flex>
        </>
    )
}

export default ReuseDetails
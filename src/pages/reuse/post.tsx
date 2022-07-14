import { Box, Flex, Heading } from "@chakra-ui/layout"
import type { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"

const ReusePost: NextPage = () => {
    return (
        <>
            <Head>
                <title>投稿ページ | Unireuse</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Flex>
                <Box>
                    <Heading as="h1" size="lg" textAlign="center">
                        Unireuse Post
                    </Heading>
                </Box>
            </Flex>
        </>
    )
}

export default ReusePost
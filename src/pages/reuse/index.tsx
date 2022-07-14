import { Box, Flex, Heading } from "@chakra-ui/layout"
import Link from "next/link"

const Reuse = () => {
    return (
        <Flex>
            <Box>
                <Heading as="h1" size="lg" textAlign="center">
                    Unireuse TimeLine
                </Heading>
                <Link href="reuse/details">詳細ページへ</Link>
                <Link href="reuse/post">投稿ページへ</Link>
            </Box>
        </Flex>
    )
}

export default Reuse
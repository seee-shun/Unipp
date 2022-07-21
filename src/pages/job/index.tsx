import type { NextPage } from "next"
import { Box, VStack, HStack, Spacer } from '@chakra-ui/react';
import { useRouter } from "next/router"
import Head from "next/head"
import JobHeader from "../../components/Molecules/job/JobHeader"
import JobPost from "../../components/Molecules/job/JobPost"
import SideNav from "../../components/SideNav";
import { Flex, Divider, Center } from "@chakra-ui/react";

const JobPage: NextPage = () => {
  return (
    <>

      <Flex maxW="2000px" direction="row" overflow="hidden">
        <SideNav />
        <Box>
          <Head>
            <title>Unipp:就活</title>
            <meta name="description" content="Events of Unipp for every student" />
          </Head>
          <JobHeader />
          index.tsxが消えてたから下メニューは復元できていない
        </Box>
      </Flex>
    </>
  )
}
export default JobPage

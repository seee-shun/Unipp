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
          <HStack>
          <JobPost title='就活サイト' content='マイナビとかーー' link='/job/cite' img='https://images.unsplash.com/photo-1657788913414-2e6f7471f53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' />
          <Spacer />
          <JobPost title='インターン' content='なかみいいい' link='/job/intern' img='https://images.unsplash.com/photo-1657700099187-9c30563d2e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
          <Spacer />
          <JobPost title='適正検査' content='spiとかー' link='/job/spi' img='https://images.unsplash.com/photo-1657788912927-65fae63f8daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
          </HStack>
        </Box>
      </Flex>
    </>
  )
}
export default JobPage

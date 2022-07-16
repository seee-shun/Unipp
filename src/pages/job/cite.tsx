import type { NextPage } from "next"
import { Box, VStack, HStack, Spacer } from '@chakra-ui/react';
import Head from "next/head"
import JobHeader from "../../components/Molecules/job/JobHeader"
import JobPost from "../../components/Molecules/job/JobPost"

const JobPage: NextPage = () => {
  return (
    <>
      <Box>
        <Head>
          <title>Unipp:就活</title>
          <meta name="description" content="Events of Unipp for every student" />
        </Head>
        <h1>サイト</h1>
      </Box>
    </>
  )
}
export default JobPage
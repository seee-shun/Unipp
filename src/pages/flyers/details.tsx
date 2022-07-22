import type { NextPage } from "next"
import { Box ,Text, Image, Heading, VStack, Center, Flex, Spacer} from "@chakra-ui/react"
type Props = {
  details: {
    id: string
    imageURL:string
    title: string
    posterId: string
    poster: string
    posterIcon: string
    posterName: string
    explain: string
    target: string
    contact: string
    createdAt: string
  }
}

const FlyerDetails: NextPage<Props> = ({ details }) => {
  return (
    <>

      <VStack w={"100vw"} align={"stretch"} 
      display='flex' justifyContent='center' alignItems='center'>

      <Image src={details.imageURL} alt='selectedFlyerPicture' />
      
      <Box >

      <Flex w={"100%"}>
          <Spacer />
          <Image
            src={details.posterIcon}
            boxSize={"30px"}
            borderRadius={"full"}
            mr={2}
          ></Image>
          <Text>
            {details.posterName}
          </Text>
        </Flex>
       
        <Flex w={"100%"} pt={4} pb={1}>
          <Heading textAlign={"left"} as='h1' size='md'>{details.title}</Heading>
          <Spacer />
        </Flex>


        <Box>
          <Text>{details.poster}</Text>
        </Box>

        <Box pt={5} pb={5} pr={2} 
        w={"95vw"} backgroundColor={"blackAlpha.100"} borderRadius={"5px"} >
          <Center>
            <Text>{details.explain}</Text>
          </Center>
        </Box>



        <Box pt={5}>
          <Box pb={1}>
            <Heading as='h2' size='sm'>対象者</Heading>
          </Box>
      
          <Box pt={5} pb={5} pr={2} 
          w={"95vw"} backgroundColor={"blackAlpha.100"} borderRadius={"5px"}>
            <Center h='100%'>
              <Text>{details.target}</Text>
            </Center>
          </Box>
        </Box>


        <Box pt={5}>
          <Box pb={1}>
            <Heading as='h2' size='sm'>連絡先</Heading>
          </Box>

          <Box pt={5} pb={5} pr={2}
          w={"95vw"} backgroundColor={"blackAlpha.100"} borderRadius={"5px"}>
            <Center h='100%'>
              {details.contact}
            </Center>
          </Box>
        </Box>


        <Box  pt={5} pb={10}>
          <Box pb={1}>
          <Heading as='h2' size='sm'>投稿日</Heading>
          </Box>

          <Box pt={5} pb={5} pr={2}
          w={"95vw"} backgroundColor={"blackAlpha.100"} borderRadius={"5px"}>
            <Center h='100%'>
              {details.createdAt}
            </Center>
          </Box>
        </Box>

      </Box>

      </VStack>

    </>
  )
}

export const getServerSideProps = async () => {
  const details = {
    id: "hogehoge",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/flyer_sample.jpg?alt=media&token=978590da-2ecb-4c99-a70f-debdadc9450d",
    views: 0,
    title: "パンプラージュ、春のパンまつり",
    explain: "パンプラージュ、春のパン祭りを開催します。遊橋研究室(J2326)にて7/25の12:00に開催！",
    target: "新入生",
    contact: "hogehoge@hage.com",
    createdAt: "2022年07月07日 15時00分00秒",
    posterId: "投稿者",
    posterName: "unnip太郎",
    posterIcon: "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/default_icon%2Fdf_ic_2.jpeg?alt=media&token=c8e8c26a-0191-4149-a3e1-1ed31cebd4bb",
  }

  return {
    props: { details },
  }
}

export default FlyerDetails
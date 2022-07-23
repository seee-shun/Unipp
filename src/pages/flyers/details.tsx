import type { NextPage } from "next"
import { Box ,Text, Image, Heading, VStack, Center, Flex, Spacer} from "@chakra-ui/react"
import { selectedFlyer } from "store/selectedFlyer"
import { useRecoilValue } from "recoil"

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

const FlyerDetails: NextPage<Props> = () => {
  const details = useRecoilValue(selectedFlyer);
  // ここはfirebaseからUsersの中身のデータを取得する必要があり、エラー回避のため
  const posterName = "Unipp太郎"
  const posterIcon = "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/default_icon%2Fdf_ic_1.jpeg?alt=media&token=8cb1ea1a-1e0a-4005-9c6c-77c63f042d2e"
  // ここはfirebaseからのデータ取得時にstoreにデータを入れていないことが原因のエラー回避のため
  const createdAt = "22/7/23 16時24分"

  const detailsList = [
    { value :details.target, tag: "対象者"},
    { value :details.contact, tag: "連絡先"},
    { value: createdAt, tag: "投稿日"}
  ]

  return (
    <>
      <VStack
        w={"100vw"}
        align={"stretch"} 
        display='flex'
        justifyContent='center'
        alignItems='center'>
      <Image src={details.imageURL} alt='selectedFlyerPicture' />
      
      <Box pb={5}>
        <Flex w={"100%"}>
          <Spacer />
          <Image
            src={posterIcon}
            boxSize={"30px"}
            borderRadius={"full"}
            mr={2}
          ></Image>
          <Text>
            {posterName}
          </Text>
        </Flex>
        <Flex w={"100%"} pt={4} pb={1}>
          <Heading textAlign={"left"} as='h1' size='md'>{details.title}</Heading>
          <Spacer />
        </Flex>

        <Box>
          <Text>{details.posterId}</Text>
        </Box>
          
        <Box pt={5} pb={5} pr={2} w={"95vw"} backgroundColor={"blackAlpha.100"} borderRadius={"5px"} >
        <Center>
          <Text>{details.explain}</Text>
        </Center>
          </Box>
          {detailsList.map((listItem) => (
            <>
              <Box pt={5}>
                <Box pb={1}>
                  <Heading as='h2' size='sm'>{listItem.tag}</Heading>
                </Box>
            
                <Box pt={5} pb={5} pr={2} 
                w={"95vw"} backgroundColor={"blackAlpha.100"} borderRadius={"5px"}>
                  <Center h='100%'>
                    <Text>{listItem.value}</Text>
                  </Center>
                </Box>
              </Box>
            </>
          ))}
      </Box>
      </VStack>
    </>
  )
}

export default FlyerDetails
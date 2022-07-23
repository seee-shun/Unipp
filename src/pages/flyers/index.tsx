import type { NextPage } from "next"
import { Box, Flex, Grid, Image, useId, Text, SimpleGrid, ChakraProps, Spacer, Icon } from "@chakra-ui/react"
import dayjs from "dayjs"
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"
import { firestore } from "../../lib/firebase"
import { useRouter } from "next/router"
import { useSetRecoilState } from "recoil"
import { selectedFlyer } from "store/selectedFlyer"
import { ViewIcon } from "@chakra-ui/icons"
import { userState } from "store/userState"

type Flyer = {
  id: string
  title: string
  poster: string
  imageURL: string
  createdAt: string
  target: string
  views: number
}

type SelectedFlyer = {
  contact: string
  explain: string
}

type Props = {
  flyers: Flyer[]
}

const Flyers: NextPage<Props> = ({ flyers }) => {
  const router = useRouter()
  const setSelectedFlyer = useSetRecoilState(selectedFlyer)
  const name = "かじたかひろ"
  const bloodType = "O"


  const clickHandler = async(flyer: Flyer) => {
    // 　ここにサブコレからcontactsとexplainを取得するメソッド記述
    const flyerDetailsRef = doc(firestore, 'flyers', flyer.id, 'details', "details");
    const flyerDetails = await getDoc(flyerDetailsRef)

    if (flyerDetails.exists()) {
      setSelectedFlyer({
        id: flyer.id,
        title: flyer.title,
        views: flyer.views,
        target: flyer.target,
        posterId: flyer.poster,
        imageURL: flyer.imageURL,
        contact: flyerDetails.data().contacts,
        explain: flyerDetails.data().explain,
      })
    }
    router.push("/flyers/details")
  }
  const borderStyle: ChakraProps = {
    borderBottom: "1px",
    borderBottomColor: "#a2a2a2",
    borderBottomStyle: "groove",
  }

  return (
    <>
      <Box padding={2} h="calc(100vh - 80px)">
        <Text ml={1} mb={1} fontSize={"xl"} fontWeight={"bold"}>
          新歓用チラシ
        </Text>
        <Box w="100%" sx={{ columnCount: [2, 4], columnGap: 10 }}>
          {flyers.map((flyer) => (
            <Box d="inline-block" pos={"relative"} key={flyer.id} mb={4} cursor={"pointer"}>
              <Image
                w="100%"
                // borderRadius="xl"
                borderRadius="md"
                src={flyer.imageURL}
                alt="Alt"
                onClick={() => clickHandler(flyer)}
              />
              <Flex mr={1}>
                <Text fontSize={"xs"}>{flyer.createdAt}</Text>
                <Spacer></Spacer>
                <Text fontSize={"xs"}>&#128516; {flyer.views}</Text>
              </Flex>
              <Text fontSize={"xs"} fontWeight="bold">
                {flyer.title}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export const getServerSideProps = async () => {
  // const 定数
  // let　変数
  let flyers: any = []
  // ここから firebaseから　flyers の取得
  const flyerPath = collection(firestore, "flyers") 
  const flyerQuery = query(flyerPath, orderBy("createdAt", "desc"))
  // 同期処理
  // const kaji = () => {
  //   const datahoshi = APItoTushinSHImasu()
  //   console.log("データゲットだぜ")
  // }

  // 非同期処理
  // const kaji = async() => {
  //   const datahoshi = await APItoTushinSHImasu()
  //   console.log("データゲットだぜ")
  // }

  const querySnapShot = await getDocs(flyerQuery)

  // const qSS = [{data:1},{data:2},{data:3}]
  querySnapShot.forEach((doc) => {
    const flyer = {
      id: doc.id,
      title: doc.data().title,
      target: doc.data().target,
      imageURL: doc.data().imageURL,
      createdAt: dayjs(doc.data().createdAt.toDate()).format("YY/MM/DD HH:mm:ss"),
      views: doc.data().views,
    }
    flyers = [...flyers, flyer]
  })
  // ここまで firebaseから　flyers の取得

  return { props: { flyers } }
}

export default Flyers

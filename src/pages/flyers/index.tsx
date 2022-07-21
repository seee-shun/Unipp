import type { NextPage } from "next"
import { Box, Flex, Image, useId } from "@chakra-ui/react"
import dayjs from "dayjs"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { firestore } from "../../lib/firebase"
import { useRouter } from "next/router"
import { useSetRecoilState } from "recoil"
import { selectedFlyer } from "store/selectedFlyer"

type Flyer = {
  id: string
  title: string
  poster: string
  imageURL: string
  explain: string
  createdAt: string
  target: string
  contact: string
}

type Props = {
  flyers: Flyer[]
}

const Flyers: NextPage<Props> = ({ flyers }) => {
  const router = useRouter()
  const setSelectedFlyer = useSetRecoilState(selectedFlyer)
  const clickHandler = () => {
    //サブこれ書く

    router.push("/flyers/details")
  }
  return (
    <>
      <Box h="calc(100vh - 80px)">
        <Box padding={4} w="100%" sx={{ columnCount: [2, 4, 4, 4], columnGap: "8px" }}>
          {flyers.map((flyer) => (
            <>
              <Box mb={2}>
                <Image
                  key={flyer.id}
                  w="100%"
                  borderRadius="xl"
                  d="inline-block"
                  src={flyer.imageURL}
                  alt="Alt"
                  onClick={clickHandler}
                />
                {flyer.title}
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  )
}

export const getServerSideProps = async () => {
  let flyers: any = []
  const flyerQuery = query(collection(firestore, "flyers"), orderBy("createdAt", "desc"))
  const querySnapShot = await getDocs(flyerQuery)

  querySnapShot.forEach((doc) => {
    const flyer = {
      id: doc.id,
      title: doc.data().title,
      target: doc.data().target,
      imageURL: doc.data().imageURL,
      createdAt: dayjs(doc.data().createdAt.toDate()).format("YYYY-MM-DD HH:mm:ss"),
      views: doc.data().views,
    }
    flyers = [...flyers, flyer]
  })

  return { props: { flyers } }
}

export default Flyers

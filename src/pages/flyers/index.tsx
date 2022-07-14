import type { NextPage } from "next"
import { Box, Flex } from "@chakra-ui/react"
import dayjs from "dayjs"
import { collection, getDocs } from "firebase/firestore"
import { firestore } from "../../lib/firebase"

type Props = {
  flyers: [
    {
      id: string
      title: string
      poster: string
      imageURL: string
      explain: string
      createdAt: string
      target: string
      contact: string
    }
  ]
}

const Flyers: NextPage<Props> = ({ flyers }) => {
  return (
    <>
      <Box h="calc(100vh - 80px)" overflowY="scroll">
        <Flex mt={"80px"} flexWrap="wrap" justifyContent="justify-between" w="100%">
          <p>{flyers[0].explain}</p>
        </Flex>
      </Box>
    </>
  )
}

export const getServerSideProps = async () => {
  let flyers: any = []
  const querySnapShot = await getDocs(collection(firestore, "flyers"))
  querySnapShot.forEach((doc) => {
    const flyer = {
      id: doc.id,
      title: doc.data().name,
      poster: doc.data().poster,
      imageURL: doc.data().imageURL,
      explain: doc.data().explain,
      createdAt: dayjs(doc.data().createdAt.toDate()).format("YYYY-MM-DD HH:mm:ss"),
      target: doc.data().target,
      contact: doc.data().contact,
    }
    flyers = [...flyers, flyer]
  })

  return { props: { flyers } }
}

export default Flyers

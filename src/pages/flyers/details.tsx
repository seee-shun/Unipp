import type { NextPage } from "next"
import { Box } from "@chakra-ui/react"

type Props = {
  details: {
    name: string
    poster: string
    posterIcon: string
    explain: string
    target: string
    contact: string
    createdAt: string
  }
}

const FlyerDetails: NextPage<Props> = ({ details }) => {
  return (
    <>
      <Box>{details.name}</Box>
      <Box>{details.name}</Box>
      <Box>{details.name}</Box>
      <Box>{details.name}</Box>
      <Box>{details.name}</Box>
      <Box>{details.name}</Box>
    </>
  )
}

export const getServerSideProps = async () => {
  // firebaseの処理を記述する
  const details = {
    name: "パンプラージュ、春のパンまつり",
    poster: "投稿者",
    posterIcon: "",
    explain: "パンプラージュ、春のパン祭りを開催します。遊橋研究室(J2326)にて7/25の12:00に開催！",
    target: "新入生",
    contact: "hogehoge@hage.com",
    createdAt: "2022年07月07日 15時00分00秒",
  }

  return {
    props: { details },
  }
}

export default FlyerDetails

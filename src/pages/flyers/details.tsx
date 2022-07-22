import type { NextPage } from "next"
import { Box } from "@chakra-ui/react"
import { selectedFlyer } from "store/selectedFlyer"
import { useRecoilValue } from "recoil"

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

const FlyerDetails: NextPage<Props> = () => {
  const details = useRecoilValue(selectedFlyer);
  return (
    <>
      <Box>{details.id}</Box>
      <Box>{details.title}</Box>
      <Box>{details.views}</Box>
      <Box>{details.target}</Box>
      <Box>{details.posterId}</Box>
      <Box>{details.imageURL}</Box>
      <Box>{details.contact}</Box>
      <Box>{details.explain}</Box>
    </>
  )
}

// export const getServerSideProps = async () => {
//   // firebaseの処理を記述する
//   const details = {
//     name: "パンプラージュ、春のパンまつり",
//     poster: "投稿者",
//     posterIcon: "",
//     explain: "パンプラージュ、春のパン祭りを開催します。遊橋研究室(J2326)にて7/25の12:00に開催！",
//     target: "新入生",
//     contact: "hogehoge@hage.com",
//     createdAt: "2022年07月07日 15時00分00秒",
//   }

//   return {
//     props: { details },
//   }
// }

export default FlyerDetails

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

        <p>ここでは有名な就活サイトを紹介します。</p>
        <ul>
          <li>
            <h2>その１　マイナビ</h2>
            <p>たぶん一番有名なとこです。とりあえず登録しましょう。</p>
          </li>
          <li>
            <h2>その２　あさがくナビ</h2>
            <p>なんかスカウト型の就活サイトらしいです。最近株価が伸びてるらしいのでなんかいい事があったんでしょう。</p>

          </li>
          <li>
            <h2>その３　キミスカ</h2>
            <p>
              F欄大学就職チャンネルで企業案件をしていた事で有名なチャンネルです。<br/>
              詳しくは、下に記載している動画を見てください
           </p>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/WdtmYtiplCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
        </ul>
      </Box>
    </>
  )
}
export default JobPage

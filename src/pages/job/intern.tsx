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
          <title>Unipp:インターン</title>
          <meta name="description" content="Events of Unipp for every student" />
        </Head>
        <h1>インターン</h1>
        <p>ここではインターンを行うために重要とされることを紹介します。</p>
        <ul>
          <li>
            <h2>その１　カスじゃないエントリーシートを書く</h2>
            <p>詳しくは、下に記載しているF欄大学就職チャンネルの動画をご覧ください</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SR4l5AKVmR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
          <li>
            <h2>その２　終活サイトに登録する</h2>
            <p>就職活動をするためには、就活サイトに登録することは当然のことです。<br/>
            <b>早いうちに</b><a href="https://job.mynavi.jp/2024/">マイナビ</a>や<a href="https://www.gakujo.ne.jp/2024/?utm_source=yahoo&utm_medium=cpc&utm_campaign=YSS_camp&yclid=YSS.1000299442.EAIaIQobChMIvuDd98mP-QIVCzdgCh1csQa8EAAYASAAEgJRv_D_BwE">あさがくナビ</a>のような就活サイトにエントリーをしましょう。</p>
          </li>
          <li>
            <h2>その３　とにかくインターンに応募しまくる！</h2>
            <p>インターンに落ちてしまう事があるかもしれませんが、そんなときのためにもたくさんの企業のインターンを受けましょう！<br/>
            もしも沢山受かってしまっても大丈夫！！<br/>
            どんどん逆お祈りしちゃいましょう！！！
            </p>
          </li>
        </ul>
      </Box>
    </>
  )
}
export default JobPage
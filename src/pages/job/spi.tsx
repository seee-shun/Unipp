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
          <title>Unipp:SPI</title>
          <meta name="description" content="Events of Unipp for every student" />
        </Head>
        <h1>SPI</h1>
       <p>ここではSPIを受けるために重要とされることを紹介します。</p>
        <ul>
          <li>
            <h2>その１　徹底的に対策を行う！</h2>
            <p>僕の高校の進路指導の先生はSPIは中学生レベルの問題しか出ない！！余裕！！！といっていました。<br/>
            もちろん、嘘(lie）です。非常に難易度が高いため、徹底的な対策が必要になります。<br/>
            下記のアフィリエイトリンクから購入いただける対策本等を活用して、1問１分で解けるようになってください
            {/* アフィリエイトリンク記入欄*/}</p>
            </li>
          <li>
            <h2>その２　就活サイトを使い倒す！</h2>
            <p>就職活動をするためには、就活サイトに登録することは当然のことなのですが、SPIの対策をするという面でも非常に大切です<br/>
            実は就活サイトではSPI等の試験の対策のためのツールを流しているサイトもあるからです<br/>
            <b>早いうちに</b><a href="https://job.mynavi.jp/2024/">マイナビ</a>や<a href="https://www.gakujo.ne.jp/2024/?utm_source=yahoo&utm_medium=cpc&utm_campaign=YSS_camp&yclid=YSS.1000299442.EAIaIQobChMIvuDd98mP-QIVCzdgCh1csQa8EAAYASAAEgJRv_D_BwE">あさがくナビ</a>のような就活サイトにエントリーをしましょう。</p>
          </li>
          <li>
            <h2>その３　とにかくインターンに応募しまくる！</h2>
            <p>インターンを受けるという事は、就活試験を受けるという事です。適当な企業を模試のように使い、本命の企業での受験に備え対策として、受けてみるのは以下かでしょうか？<br/>
            もしも行きたくないところに受かってしまっても大丈夫！！<br/>
            どんどん逆お祈りしちゃいましょう！！！
            </p>
          </li>
        </ul>
      </Box>
    </>
  )
}
export default JobPage
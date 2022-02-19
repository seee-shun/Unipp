import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { EventTag } from "../../components/Molecules/EventTag";
import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { EventBox } from "../../components/Molecules/EventBox";
import { EventClipButton } from "../../components/Molecules/EventClipButton";
import type { ReactElement, ReactNode } from "react";
import { OnlyBack } from "../../components/Layouts/OnlyBack";

type Props = {
  eventType: string;
  title: string;
  description: string;
  host: string;
  period?: {
    start: string;
    finish: string;
  };
  place?: {
    name: string;
  };
};

type NextPageWithLayout = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Details: NextPageWithLayout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Events of Unipp for every student" />
      </Head>
      <main className="event-main">
        <Box display={{ lg: "flex" }} w="100%">
          <Box maxW={{ lg: 500 }}>
            <Image
              src="https://source.unsplash.com/user/erondu/1600x900"
              layout="responsive"
              width={160}
              height={90}
            />
            <Box m={4}>
              <Box pb={2}>
                <Flex w="100%" justifyContent="space-between">
                  <EventTag size="lg">{props.eventType}</EventTag>
                  <EventClipButton cliped={true} />
                </Flex>
              </Box>
              <Text fontSize="xl" fontWeight="bold">
                {props.title}
              </Text>
              <EventBox>
                <Text fontSize="sm" textAlign="left">
                  {props.description}
                </Text>
              </EventBox>
              <Box mt={4}>
                <EventBox title="主催者">
                  <Text fontWeight="bold">{props.host}</Text>
                </EventBox>
              </Box>
            </Box>
          </Box>
          <Box
            flexGrow={{ lg: 1 }}
            h={{ lg: "calc(100vh - 80px)" }}
            overflowY="scroll"
          >
            <Box m={4}>
              <EventBox title="期間">
                <Text fontWeight="bold">2021-4-21 → 2021-4-29</Text>
              </EventBox>
            </Box>
            <Box m={4}>
              <EventBox title="場所">
                <Text>佐鳴会館</Text>
              </EventBox>
            </Box>
            <Box m={4}>
              <EventBox title="連絡先">
                <a href="mailto:tk69kj619@gmail.com">メールはこちらまで</a>
              </EventBox>
            </Box>
            <Box m={4}>
              <EventBox title="定員">
                <Text>100人</Text>
              </EventBox>
            </Box>
            <Box m={4}>
              <EventBox title="関連リンク">
                <Link href="https://test.com" color="teal.500">
                  Chakra Design system
                </Link>
              </EventBox>
            </Box>
            <Box m={4}>
              <EventBox title="場所">
                <Text>佐鳴会館</Text>
              </EventBox>
            </Box>
            <Box m={4}>
              <EventBox title="参加費">
                <Text>無料</Text>
              </EventBox>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
};

Details.getLayout = (page: ReactElement) => {
  return <OnlyBack>{page}</OnlyBack>;
};
export const getStaticProps = () => {
  const details = {
    eventType: "新入生歓迎会",
    title: "僕らと一緒に踊りませんか？",
    description:
      "「一分は六十秒、一時間は六十分、では一日は？」と聞かれたら迷わず「二十四時間」と、わたしたちは答えます。けれども本当に一日は二十四時間なのでしょうか？　「一日二十四時間」という答えは、必ずしもどの時代でも正解とは言えないようです。一日というのは、地球が地軸を中心にぐるっと一回転するのにかかる時間をいいます。けれども、その動きを狂わす存在があります。その一つが月です。月にも引力があり、月の引力は、地球の海の水を引っ張ります。地球がお父さんだとすると、月という子供がお父さんの海を引っ張っているので、お父さんは回転しにくくなります。その結果、少しずつですが一日の長さが伸びていくのです。",
    host: "浜松学生連 鰻陀羅",
  };
  return {
    props: details,
  };
};
export default Details;

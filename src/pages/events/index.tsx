import type { NextPage } from "next";
import Head from "next/head";
import { EventCard } from "../../components/Organisms/EventCard";
import { EventSort } from "../../components/Organisms/EventSort";
import { Box, Flex } from "@chakra-ui/layout";
import dayjs from "dayjs";

type Props = {
  tags: string[];
  events: [
    {
      type: string;
      host: string;
      image: string;
      title: string;
      cliped: boolean;
      finished?: boolean;
      period?: {
        start: string;
        finish: string;
      };
    }
  ];
};

const Events: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Unipp:Events</title>
        <meta name="description" content="Events of Unipp for every student" />
      </Head>
      <main>
        {/* <EventSort tags={props.tags} /> */}
        <Box h="100%">
          <Flex flexWrap="wrap" justifyContent="justify-between" w="100%">
            {props.events.map((event, index) => {
              // return <EventCard key={index} {...event} />;
            })}
            {props.events.map((event, index) => {
              // return <EventCard finished key={index} {...event} />;
            })}
          </Flex>
        </Box>
      </main>
    </>
  )
}

export const getServerSideProps = () => {
  // ここでfirebaseのコードを書く or Recoilのコード
  const tags = [
    "音楽",
    "新歓",
    "ゆる募",
    "学会",
    "サークル・イベント",
    "勉強会",
    "朝活",
    "旅行",
  ];
  const start = new Date("December 17, 1995 03:24:00").toJSON();
  const finish = new Date("December 17, 1995 03:24:00").toJSON();
  const events = [
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1500",
      title: "テスト",
      cliped: false,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "未来研究所",
      image: "https://source.unsplash.com/user/erondu/1800x1501",
      title: "奇跡的ハッカソン",
      cliped: false,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1502",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1503",
      title: "テスト",
      cliped: false,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1504",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1505",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1506",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1507",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1508",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs().format("MM月DD日"),
      },
    },
  ];
  return {
    props: { tags, events },
  };
};

export default Events;

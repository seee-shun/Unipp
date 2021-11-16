import type { NextPage } from "next";
import Head from "next/head";
import { EventCard } from "../../components/Organisms/EventCard";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import dayjs from "dayjs";
import { MyPage } from "../../components/Layouts/MyPage";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { TriangleDownIcon } from "@chakra-ui/icons";

type Props = {
  userClipedEvents: [
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
  userPostedEvents: [
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

type NextPageWithLayout = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Mypage: NextPageWithLayout = (props) => {
  const tabMenu = [
    { id: "cliped", title: "保存一覧" },
    { id: "posted", title: "投稿一覧" },
  ];
  let [currentTab, setCurrentTab] = useState(tabMenu[0].id);

  const tabMenuItemsHandler = (tabMenuId: string): void => {
    if (tabMenuId === currentTab) return;
    setCurrentTab(tabMenuId);
  };

  return (
    <>
      <Head>
        <title>Unipp:マイページ</title>
        <meta name="description" content="Events of Unipp for every student" />
      </Head>
      <main>
        <Box display="flex" flexDirection="column" h="calc(100vh - 80px)">
          <Box
            bgGradient={[
              "linear(to-t, #a8edea, #fed6e3)",
              "linear(to-t, #22ef63, #f9f047)",
              "linear(to-b, #1cc39f, #3babf1)",
            ]}
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            flex={3}
          >
            <Avatar
              size={useBreakpointValue({ base: "xl" })}
              src="https://bit.ly/dan-abramov"
            ></Avatar>
            <Box m={2}>
              <Text color="white" fontWeight="bold">
                山田 太郎
              </Text>
              <Text color="white">静岡大学</Text>
            </Box>
          </Box>
          <Box
            flex={7}
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                background: "#09C9D9",
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: "10px",
                background: "gray",
              },
            }}
          >
            <Box
              borderRadius={4}
              p={2}
              top={{ base: "-1px", lg: "0" }}
              position="sticky"
              zIndex={11}
              bgColor="rgba(255, 255, 255, 0.4)"
              backdropFilter="saturate(180%) blur(5px)"
            >
              <Flex>
                {tabMenu.map((el, index) => {
                  return (
                    <Flex
                      key={el.id}
                      flex={1}
                      justifyContent="center"
                      alignItems="center"
                      border={
                        currentTab === el.id ? "2px solid #f2d672" : "unset"
                      }
                      bgColor={currentTab === el.id ? "white" : "unset"}
                      borderRadius="full"
                      onClick={() => tabMenuItemsHandler(el.id)}
                    >
                      <TriangleDownIcon
                        w={4}
                        h={4}
                        mr={1}
                        color={currentTab === el.id ? "#F2D672" : "#4e4e4e"}
                      />
                      <Text
                        mr={2}
                        fontWeight={currentTab === el.id ? "bold" : "unset"}
                      >
                        {el.title}
                      </Text>
                    </Flex>
                  );
                })}
                {/* <Text flex={1} textAlign="center">
                  <TriangleDownIcon w={6} h={6} mr={1} color="#4e4e4e" />
                  投稿イベント
                </Text> */}
              </Flex>
            </Box>
            <Box>
              {currentTab === "cliped" && (
                <Flex flexWrap="wrap" justifyContent="justify-between" w="100%">
                  {props.userClipedEvents.map((event, index) => {
                    return <EventCard key={index} {...event} />;
                  })}
                </Flex>
              )}
              {currentTab === "posted" && (
                <Flex flexWrap="wrap" justifyContent="justify-between" w="100%">
                  {props.userPostedEvents.map((event, index) => {
                    return <EventCard key={index} {...event} />;
                  })}
                </Flex>
              )}
            </Box>
          </Box>
          {/* </Box> */}
        </Box>
      </main>
    </>
  );
};

export const getServerSideProps = () => {
  // ここでfirebaseのコードを書く or Recoilのコード
  const start = new Date("December 17, 1995 03:24:00").toJSON();
  const finish = new Date("December 17, 1995 03:24:00").toJSON();
  const userClipedEvents = [
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1500",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "未来研究所",
      image: "https://source.unsplash.com/user/erondu/1800x1501",
      title: "奇跡的ハッカソン",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1502",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1500",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "未来研究所",
      image: "https://source.unsplash.com/user/erondu/1800x1501",
      title: "奇跡的ハッカソン",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1502",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1500",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "未来研究所",
      image: "https://source.unsplash.com/user/erondu/1800x1501",
      title: "奇跡的ハッカソン",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1502",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
  ];
  const userPostedEvents = [
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1500",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM/DD"),
        finish: dayjs().format("MM/DD"),
      },
    },
  ];
  return {
    props: { userClipedEvents, userPostedEvents },
  };
};

Mypage.getLayout = (page: ReactElement) => {
  return <MyPage>{page}</MyPage>;
};

export default Mypage;

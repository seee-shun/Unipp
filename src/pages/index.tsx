import type { NextPage } from "next"
import { ReactElement } from "react"
import Head from "next/head"
import Image from "next/image"
import { UniversityListModal } from "../components/Organisms/UniversityListModal"
//import styles from "../styles/Home.module.css";
import {
  Box,
  Flex,
  VStack,
  Stack,
  Button,
  Text,
  useBreakpointValue,
  Container,
  useColorModeValue,
  SimpleGrid,
  Center,
  Heading,
  Icon,
  Divider,
  HStack,
} from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
//import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const IMAGE = "/iphone.png"

interface FeatureProps {
  title: string
  text: string
  background: string
}

const feature = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  }
})

const Feature = ({ title, text }: FeatureProps) => {
  return (
    <Stack>
      {/* <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      ></Flex> */}
      <Text fontWeight={1000}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Unipp:Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          w={"100%"}
          h={"100vh"}
          backgroundImage={"url('/top_image.jpg')"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          >
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
              >
                大学生のためのアプリUnipp
              </Text>
              <Stack direction={"row"}>
                <Button
                  bg={"whiteAlpha.500"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "whiteAlpha.600" }}
                  as="a"
                  href="/signIn"// あとで変更が必要
                  size="lg"
                  w={{ base: "180px", lg: "230px" }}
                  h="50px"
                >
                  はじめる
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
        <Box p={{ base: 10, lg: 32 }}>
          <VStack>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "4xl", lg: "5xl" }}
              p={10}
              as={"span"}
              color={useColorModeValue("green.400", "green.300")}
              position={"relative"}
              zIndex={0}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "30px",
                w: "full",
                h: "20%",
                bg: useColorModeValue("green.100", "green.900"),
                zIndex: -2,
              }}
            >
              Unippとは
            </Text>
            <Text fontSize={"2xl"} textAlign={"center"} width={{ base: "85vw", lg: "70vw" }}>
              Unippとは、大学生のキャンパスライフをサポートするアプリです。通っている大学や周辺地域のイベント情報を投稿・閲覧することができます。
            </Text>
          </VStack>
        </Box>
        <Box p={{ base: 10, lg: 32 }} bg="gray.100">
          <Center>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "4xl", lg: "5xl" }}
              p={10}
              as={"span"}
              color={useColorModeValue("green.400", "green.300")}
              position={"relative"}
              zIndex={0}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "30px",
                w: "full",
                h: "20%",
                bg: useColorModeValue("green.100", "green.900"),
                zIndex: -2,
              }}
            >
              特徴
            </Text>
          </Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign={"center"}>
            {features.map((feature) => (
              <Box key={feature.title}>
                <Heading fontFamily={"heading"} fontSize={"2xl"} color={"black"} mb={3}>
                  {feature.title}
                </Heading>
                <Text fontSize={"xl"}>{feature.content}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box pt={{ base: 10, lg: 32 }}>
          <Center>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "4xl", lg: "5xl" }}
              p={10}
              as={"span"}
              color={useColorModeValue("green.400", "green.300")}
              position={"relative"}
              zIndex={0}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "30px",
                w: "full",
                h: "20%",
                bg: useColorModeValue("green.100", "green.900"),
                zIndex: -2,
              }}
            >
              使い方
            </Text>
          </Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {usages.map((usage) => (
              <Box key={usage.title} p={4} textAlign={"center"}>
                <Box textAlign={"center"} pb={4}>
                  <Image alt="実際の画面図" src={usage.image} width={500} height={500} objectFit="contain" />
                  {/* 表示まで時間かかるイメージあり(いったん放置します) */}
                </Box>
                <Heading fontFamily={"heading"} fontSize={"2xl"} color={"black"} mb={3}>
                  {usage.title}
                </Heading>
                <Text fontSize={"lg"}>{usage.explanation}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Stack pt={{ base: "10", lg: "32" }}>
          <Box p={{ base: 10, lg: 32 }} background={"gray.100"}>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Center>
                <Text
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={{ base: "4xl", lg: "5xl" }}
                  p={10}
                  as={"span"}
                  color={useColorModeValue("green.400", "green.300")}
                  position={"relative"}
                  zIndex={0}
                  _after={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "30px",
                    w: "full",
                    h: "20%",
                    bg: useColorModeValue("green.100", "green.900"),
                    zIndex: -2,
                  }}
                >
                  対応大学
                </Text>
              </Center>
              <Text color={"gray.600"} fontSize={"2xl"}>
                全国1000校以上の大学(短期大学を含む)に対応！
              </Text>
            </Stack>
            <Container maxW={"6xl"} mt={10}>
              <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={10} textAlign={"center"}>
                <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
                  静岡大学
                </Text>
                <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
                  静岡産業大学
                </Text>
                <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
                  静岡文化芸術大学
                </Text>
                <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
                  静岡大学
                </Text>
                <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
                  静岡大学
                </Text>
                <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
                  静岡大学
                </Text>
                <Text fontWeight={600} fontSize={{ base: "lg", md: "xl" }}>
                  静岡大学
                </Text>
              </SimpleGrid>
            </Container>
            <Center pt={4}>
              <UniversityListModal />
            </Center>
          </Box>
        </Stack>
        <Center>
          <Box width={{ base: "85vw", lg: "60vw" }} py={{ base: 10, lg: 32 }}>
            <Center>
              <Text
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: "4xl", lg: "5xl" }}
                p={7}
                as={"span"}
                color={useColorModeValue("green.400", "green.300")}
                position={"relative"}
                zIndex={0}
                _after={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "20px",
                  w: "full",
                  h: "20%",
                  bg: useColorModeValue("green.100", "green.900"),
                  zIndex: -2,
                }}
              >
                よくある質問
              </Text>
            </Center>
            <Stack spacing={10}>
              {faqs.map((faq) => (
                <Box key={faq.question} rounded="base" bg="white.200" minW={"80%"} py={10} p={4}>
                  <Heading fontFamily={"heading"} fontSize={"xl"} color={"black"} mb={3}>
                    Q. {faq.question}
                  </Heading>
                  <Text fontSize={"lg"}>A. {faq.answer}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </Center>
        <Center>
          <Divider borderColor={"black"} size="5" maxW={"80vw"} />
        </Center>

        <Flex p={8} flex={1} align={"center"} justify={"center"} direction={{ base: "column", lg: "row" }}>
          <Stack w={"full"} maxW={"lg"} textAlign={{ base: "center", lg: "left" }}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} textAlign={{ base: "center", lg: "left" }}>
              <Text color={"blue.400"}>アプリを通して交流を広げよう</Text>
            </Heading>
            <Text fontSize={{ base: "lg", lg: "xl" }} color={"gray.500"}>
              東海地域の大学に先行リリース中！
            </Text>
          </Stack>

          <Stack>
            <Button
              p={6}
              m={6}
              rounded={"full"}
              bg={"gray.500"}
              color={"white"}
              _hover={{
                bg: "gray.600",
              }}
            >
              今すぐはじめる
            </Button>
          </Stack>
        </Flex>

        <Box bg={useColorModeValue("gray.200", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            {/* <Stack direction={"row"} spacing={6}>
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Contact</Link>
            </Stack> */}
            <Text>© 2022 Ylab. All rights reserved</Text>
          </Container>
        </Box>
      </main>
    </>
  )
}

const features = [
  { title: "近くの大学生と情報共有できる", content: "学外の大学生と幅広いコミュニケーションの機会を提供しています。" },
  {
    title: "地域ごとに情報が分かれている",
    content:
      "全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。",
  },
  { title: "他大学にも情報発信できる", content: "自分の大学だけでなく、他大学にも情報を発信することができます。" },
]
const faqs = [
  { question: "無料で使えますか？", answer: "はい、すべて無料でお使いいただけます。" },
  {
    question: "ユーザー登録ができません。",
    answer:
      "大学から発行されたメールアドレスでのみご登録いただけます。大学名選択後に表示されるメールアドレスが異なっていた場合は、お手数ですがお問い合わせください。",
  },
  {
    question: "対応大学一覧に自分の大学がありません。",
    answer: "お手数ですが、大学名を記載してお問い合わせをお願いします。",
  },
]
const usages = [
  { title: "Step1", explanation: "大学名を選択して登録しよう", image: "/sumple1.png" },
  { title: "Step2", explanation: "イベント情報を探してみよう", image: "/sumple3.png" },
  { title: "Step3", explanation: "イベントに参加してみよう", image: "/sumple2.png" },
]

export default Home
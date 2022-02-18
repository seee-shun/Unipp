import type { NextPage } from "next";
import { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import { UniversityListModal } from "../components/Organisms/UniversityListModal";
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
  Link,
  useColorModeValue,
  SimpleGrid,
  Center,
  Heading,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
//import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  background: string;
}

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

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
  );
};

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
          w={"full"}
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
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                大学生のためのアプリUnipp
              </Text>
              <Stack direction={"row"}>
                <Button
                  bg={"whiteAlpha.500"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "whiteAlpha.500" }}
                  as="a"
                  href="https://google.com"// あとで変更が必要
                >
                  今すぐ使ってみる
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
        <Box pt={{base: 10, lg:32 }}>
          <Center
            color={"black"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{base: "4xl", lg: "5xl" }}
            p={6}
          >
            Unippとは
          </Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {stats.map((stat) => (
                <Box key={stat.title} rounded="base">
                  <Heading
                    fontFamily={'heading'}
                    fontSize={'xl'}
                    color={'black'}
                    mb={3}>
                    {stat.title}
                  </Heading>
                  <Text fontSize={'lg'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
          </SimpleGrid>
        </Box>
        <Stack
          pt={{ base: "10", lg: "32"}}
        >
          <Box p={4} background={"gray.100"}>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Heading fontSize={{base: "4xl", lg: "5xl" }}>対応大学</Heading>
              <Text color={"gray.600"} fontSize={"xl"}>
                1000校以上の大学(短期大学を含む)に対応！！
              </Text>
            </Stack>
            <Container maxW={"6xl"} mt={10}>
              <SimpleGrid columns={{ base: 2,  lg: 4 }} spacing={10} textAlign={"center"}>

                  {/* <Box color={"green.400"} px={2}>
                    <Icon as={CheckIcon} />
                  </Box> */}
                    <Text fontWeight={600} fontSize={"lg"}>静岡大学</Text>
                    <Text fontWeight={600} fontSize={"lg"}>静岡産業大学</Text>
                    <Text fontWeight={600} fontSize={"lg"}>静岡文化芸術大学</Text>
                    <Text fontWeight={600} fontSize={"lg"}>静岡大学</Text>
                    <Text fontWeight={600} fontSize={"lg"}>静岡大学</Text>
                    <Text fontWeight={600} fontSize={"lg"}>静岡大学</Text>
                    <Text fontWeight={600} fontSize={"lg"}>静岡大学</Text>
              </SimpleGrid>
            </Container>
            <Center pt={4}>
            <UniversityListModal />
            </Center>
          </Box>
        </Stack> 
        <Box
          bg={useColorModeValue("gray.200", "gray.900")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
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
            <Text>© 2021 Chakra Templates. All rights reserved</Text>
          </Container>
        </Box>      
      </main>
    </>
  );
};

const stats = [
  { title: '近くの大学生と情報共有できる',
    content: '学外の大学生と幅広いコミュニケーションの機会を提供しています。'
  },
  { title: '地域ごとに情報が分かれている',
    content: '全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。'
  },
  { title: '他大学にも情報発信できる',
    content: '自分の大学だけでなく、他大学にも情報を発信することができます。'
  },
];

export default Home;

import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  read?: boolean;
};

export const EventCard: React.FC<Props> = ({ children, read }) => {
  const bgImage = [
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
    "https://source.unsplash.com/user/erondu/180x15",
  ];

  return (
    <>
      {bgImage.map((data, i) => {
        return (
          <Box
            w="165px"
            h="125px"
            key={i}
            bgImg={`${data}${i}`}
            objectFit="cover"
            borderRadius="10px"
            filter={read ? "brightness(0.4)" : ""}
          >
            {/* <Image src={bgImage} width={200} height={100} alt="this is Image"/> */}
            <Flex
              flexDirection="column"
              color="white"
              height="inherit"
              width="inherit"
              p="12px"
              bgColor="#00000040"
              borderRadius="inherit"
            >
              <Flex alignItems="flex-start">
                <Box>
                  <Tag
                    size="md"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="blue"
                  >
                    <TagLabel>勉強会</TagLabel>
                  </Tag>
                </Box>
                <Spacer />
                <Box>
                  <Flex flexDirection="column" alignItems="center">
                    <Box>★</Box>
                    <Box fontSize="4px">99</Box>
                  </Flex>
                </Box>
              </Flex>
              <Spacer />
              <Box textAlign="left" fontSize="4px" fontWeight="bold">
                <h2>2021/11/11</h2>
                <h2>団体</h2>
                <h2>タイトル</h2>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};

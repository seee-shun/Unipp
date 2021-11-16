import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { EventTag } from "../Molecules/EventTag";
import { EventClipButton } from "../Molecules/EventClipButton";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";

type Props = {
  type: string;
  host: string;
  image: string;
  title: string;
  cliped: boolean;
  finished?: boolean;
  period: {
    start: any;
    finish: any;
  };
};

const EventCardImage = styled.div`
  .event-image {
    border-radius: 10px;
    filter: brightness(0.8);
  }
`;

export const EventCard: React.FC<Props> = (props) => {
  const router = useRouter();
  const pushToDetails = () => {
    router.push("events/details");
  };

  return (
    <>
      <Box w={{ base: "50%", md: "33%", lg: "25%" }} p={1}>
        <Box
          objectFit="cover"
          borderRadius="auto"
          filter={props.finished ? "brightness(0.4)" : ""}
          position="relative"
          onClick={pushToDetails}
        >
          <EventCardImage>
            <Image
              className="event-image"
              src={props.image}
              width={165}
              height={125}
              layout="responsive"
            />
          </EventCardImage>
          <Box position="absolute" top="0" width="100%">
            <Flex flexDirection="column" color="white" p="8px">
              <Flex alignItems="flex-start">
                <EventTag size="md">{props.type}</EventTag>
                <Spacer />
                <EventClipButton cliped={props.cliped} />
              </Flex>
            </Flex>
          </Box>
          <Box position="absolute" bottom="0">
            <Flex p="12px">
              <Box
                textAlign="left"
                fontSize={{ base: 14 }}
                fontWeight="bold"
                color="white"
              >
                <Text fontWeight="bold">{props.title}</Text>
                <Text>{props.host}</Text>
                <Text>
                  {props.period.start} →　{props.period.finish}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

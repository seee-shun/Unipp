import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import { EventCard } from "../../components/Organisms/EventCard";
import { EventSort } from "../../components/Organisms/EventSort";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Button, Tag, TagLabel } from "@chakra-ui/react";

type Props = {
  tags: string[];
};

const Events: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Unipp:Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex flexWrap="wrap" gridGap="0.2rem" justifyContent="center">
          <EventSort tags={props.tags} />
          <EventCard></EventCard>
          <EventCard read></EventCard>
        </Flex>
      </main>
    </>
  );
};

export default Events;

export const getStaticProps = async () => {
  let tags = [
    "音楽",
    "新歓",
    "ゆる募",
    "学会",
    "その他",
    "音楽",
    "新歓",
    "ゆる募",
    "学会",
    "その他",
  ];
  return {
    props: { tags },
  };
};

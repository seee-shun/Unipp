import React, { useEffect, useState, useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/layout";
import { StarIcon } from "@chakra-ui/icons";

type Props = {
  cliped: boolean;
};

export const EventClipButton: React.FC<Props> = (props) => {
  let [cliped, setCliped] = useState(props.cliped);
  const toast = useToast();
  let isFirstRender = useRef(false);

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      if (cliped === true) {
        toast({
          title: "保存しました。",
          duration: 1000,
          status: "info",
          variant: "subtle",
        });
      } else {
        toast({
          title: "保存解除しました",
          duration: 1000,
          status: "info",
        });
      }
    }
  }, [cliped]);
  const clipEvent = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setCliped((cliped) => !cliped);
    // firebase の処理
    // const updateEventCliped = () => {
    //   getRef("").set(cliped, captureWatchError);
    // };
    // const captureUpdateError = (err: any) => {
    //   if (err) {
    //     console.log(err);
    //     const errorTarget = cliped ? "保存" : "保存解除";
    //     toast({
    //       title: `${errorTarget}に失敗しました`,
    //       duration: 2000,
    //       status: "error",
    //     });
    //   }
    // };
  };
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        borderRadius="100%"
        bgColor="rgba(255, 255, 255, 0.85)"
        backdropFilter="saturate(180%) blur(5px)"
        onClick={clipEvent}
      >
        <StarIcon color={cliped ? "#f2d672" : "lightgray"} w={5} h={5} />
      </Flex>
    </>
  );
};

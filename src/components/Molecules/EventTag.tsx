import React from "react";
import { Tag, TagLabel } from "@chakra-ui/tag";

export const EventTag: React.FC = (props) => {
  return (
    <>
      <Tag
        p="4px 12px"
        size="md"
        borderRadius="full"
        variant="solid"
        bgColor="#3181CE"
        fontWeight="bold"
      >
        <TagLabel>{props.children}</TagLabel>
      </Tag>
    </>
  );
};

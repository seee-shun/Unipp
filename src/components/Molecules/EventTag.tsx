import React from "react"
import { Tag, TagLabel } from "@chakra-ui/tag"

type Props = {
  size?: (string & {}) | "sm" | "md" | "lg";
  color?: string;
};

export const EventTag: React.FC<Props> = (props) => {
  return (
    <>
      <Tag
        p="0.5rem 1rem"
        size={props.size}
        borderRadius="full"
        variant="solid"
        bgColor={props.color ? props.color : "#3181ce"}
        fontWeight="bold"
      >
        <TagLabel>{props.children}</TagLabel>
      </Tag>
    </>
  )
}

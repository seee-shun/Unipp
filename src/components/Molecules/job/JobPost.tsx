import React from "react";
import Image from 'next/image';
import NextLink from "next/link"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = {
  title?: string;
  content?: string;
  img?: any;
  link?: string;
}

const JobPost: React.FC<Props> = (props) => {
  return (
    <Link href={props.link}>
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={props.img}
              alt='pic'
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {props.title}
            </Heading>
            <Text color={'gray.500'} _hover={{ color: 'red.500' }}
            >
              {props.content}
            </Text>
          </Stack>
        </Box>
      </Center>
    </Link>
  );
}

export default JobPost
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Textarea,
    Divider,
  } from '@chakra-ui/react'
import Data from "../../datas/university.json"
import { AddIcon } from "@chakra-ui/icons";

const hokkaido: string[] = [];
const tohoku: string [] = [];
const kanto: string [] = [];
const hokuriku: string [] = [];
const tokai: string [] = [];
const kinki: string [] = [];
const tyugoku: string [] = [];
const sikoku: string [] = [];
const kyusyu: string [] = [];

Data.filter((univ) => {
  switch(univ.area) {
    case '北海道':
    return(hokkaido.push(univ.name));
    case '東北':
    return(tohoku.push(univ.name));
    case '関東甲信':
    return(kanto.push(univ.name));
    case '北陸':
    return(hokuriku.push(univ.name));
    case '東海':
    return(tokai.push(univ.name));
    case '近畿':
    return(kinki.push(univ.name));
    case '中国':
    return(tyugoku.push(univ.name));
    case '四国':
    return(sikoku.push(univ.name));
    case '九州':
    return(kyusyu.push(univ.name));
  }
});


  type Props = {
  };

export const CreatePostModal: React.FC<Props> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>      
            <IconButton 
             aria-label="新規投稿"
             icon={<AddIcon/>}
             onClick={onOpen}
             colorScheme='teal'
             bg ='white'
             borderRadius="full"
             variant='outline' 
             size='lg'
             position="absolute"
             bottom={24}
             boxShadow="md"
             right={{ base: "20", lg: "40"}} >
            </IconButton>
      
            <Modal
              onClose={onClose}
              isOpen={isOpen}
              scrollBehavior={'inside'}
              size={'2xl'}      
              >
              <ModalOverlay />
              <ModalContent p={8}>
                <ModalHeader>New</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Textarea 
                    forcusBorderColor="black" 
                    size="lg" 
                    p={4}
                    mb={8}
                    placeholder="投稿内容を入力" />
                    <Divider />                            
                </ModalBody>
                <ModalFooter justifyContent="space-between">
                  <Button
                    bgColor="white"
                    borderRadius="full"
                    borderColor="blackAlpha.700"
                    borderWidth="1px"
                    px={8}
                    >#タグを選択
                  </Button>
                  <Button 
                    onClick={onClose} 
                    bgColor="blackAlpha.700" 
                    color="white" 
                    borderRadius="full" 
                    px={8}  
                    fontSize="lg">
                    投稿
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
  }
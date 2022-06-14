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
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
  } from '@chakra-ui/react'
import Data from "../../datas/university.json"

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

export const UniversityListModal: React.FC<Props> = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>      
            <Button 
             mt={3} 
             onClick={onOpen}
             colorScheme='teal'
             bg ='white'
             variant='outline' 
             size='md'
             width='200px'>
              すべて表示
            </Button>
      
            <Modal
              onClose={onClose}
              isOpen={isOpen}
              scrollBehavior={'inside'}
              size={'xl'}              
              >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>対応大学一覧</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Accordion>                    
                            {accordions.map((item, index) => (
                                <AccordionItem key={index}>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                {item.area}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                      <Text space={4}>
                                    {`${item.university},`}
                                    </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            ))}
                    </Accordion>                                
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
  }

  const accordions = [
    { area: '北海道',
      university: hokkaido
    },
    { area: '東北',
      university: tohoku
    },
    { area: '関東甲信',
      university: kanto
    },
    { area: '北陸',
      university: hokuriku
    },
    { area: '東海',
      university: tokai
    },
    { area: '近畿',
      university: kinki
    },
    { area: '中国',
      university: tyugoku
    },
    { area: '四国',
      university: sikoku
    },
    { area: '九州沖縄',
      university: kyusyu
    },
  ];


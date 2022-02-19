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
    GridItem,
  } from '@chakra-ui/react'

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
                            {accordions.map((item) => (
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left' key={item.area}>
                                                {item.area}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    {item.university}
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
      university: '学外の大学生と幅広いコミュニケーションの機会を提供しています。'
    },
    { area: '東北',
      university: '全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。'
    },
    { area: '関東甲信',
      university: '自分の大学だけでなく、他大学にも情報を発信することができます。'
    },
    { area: '北陸',
      university: '学外の大学生と幅広いコミュニケーションの機会を提供しています。'
    },
    { area: '東海',
      university: '全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州沖縄)に分けているため、簡単に自分の周辺大学の情報を見られます。'
    },
    { area: '近畿',
      university: '自分の大学だけでなく、他大学にも情報を発信することができます。'
    },
    { area: '中国',
      university: '学外の大学生と幅広いコミュニケーションの機会を提供しています。'
    },
    { area: '四国',
      university: '全国を9地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州)に分けているため、簡単に自分の周辺大学の情報を見られます。'
    },
    { area: '九州沖縄',
      university: '自分の大学だけでなく、他大学にも情報を発信することができます。'
    },
  ];


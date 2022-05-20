import {  Box,Button,Flex,Image, SimpleGrid, Text  } from "@chakra-ui/react"
import ChakraText from "../../components/Text";
import Link from "next/link";
import useStyleHooks from '../../hooks/useStyles';
import {MdFacebook} from 'react-icons/md'
import { BsTwitter,BsInstagram } from "react-icons/bs";
import {FaLinkedinIn} from 'react-icons/fa'
import Header from "../../components/Header";
import ChakraButton from "../../components/ChakraButton";

const Footer =()=>{


    const styles = useStyleHooks();

    return(

        <SimpleGrid
         className="footerbox"
         justify={'space-between'}
         py={['1.4em','2em']} pt={['2em','2.5em']} px={['1em','1.5em','3em','3.5em']}
         borderTop='1px solid' 
         borderTopColor={styles.neut300}          
         spacingX={[0,'1em','1.5em','3em']}
         mt={'5em'}
         columns={[1,2,3,4]}

        >
            <Box p={{lg:'1em'}} flex={1}>
                <Image src="logo.svg" height='65px' />

                <ChakraText  fontSize='14px' color={styles.neut700}>
                    CopyRight 2022
                </ChakraText>

                <Flex mt='0.8em'>
                    <Text>
                        <Link href=''>
                            <MdFacebook fontSize='15px'  color={styles.pry} />
                        </Link>
                    </Text>

                    <Text ml='0.8em'>
                        <Link href=''>
                            <BsTwitter fontSize='15px' color={styles.pry} />
                        </Link>
                    </Text>

                    <Text ml='0.8em'>
                        <Link href=''>
                            <BsInstagram color={styles.pry} />
                        </Link>
                    </Text>


                    <Text ml='0.8em'>
                        <Link href=''>
                            <FaLinkedinIn fontSize='15px' color={styles.pry} />
                        </Link>
                    </Text>

                </Flex>
            </Box>

            <Box mt={{base:'2em',lg:0}} flex={1}>
                <Header pb='1em' borderBottom={'1px solid'} borderBottomColor={styles.neut300} 
                 light fontWeight={600} hVariant='h5'>
                     MENU
                </Header>
                
                <Flex mt='1.5em' justify={'space-between'}>

                    <Box>
                        <Box>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Home</ChakraText>
                            </Link>
                        </Box>

                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Eat</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Drink</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Events</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Club</ChakraText>
                            </Link>
                        </Box>

                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Recreation</ChakraText>
                            </Link>
                        </Box>

                    </Box>

                    <Box>
                        <Box>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Blog</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Careers</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Contact</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>FAQs</ChakraText>
                            </Link>
                        </Box>


                    </Box>




                </Flex>

            </Box>

            <Box mt={{base:'2em',lg:0}}  minW={'220px'} >
                    <Header pb='1em'  borderBottom={'1px solid'} borderBottomColor={styles.neut300} 
                     light fontWeight={600} hVariant='h5'>
                        UTILITY PAGES
                    </Header>

                    
                    <Box mt='1.5em'>
                        <Box>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Start here</ChakraText>
                            </Link>
                        </Box>

                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Style guide</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Password protected</ChakraText>
                            </Link>
                        </Box>



                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>404 Not Found</ChakraText>
                            </Link>
                        </Box>


                        <Box mt='0.5em'>
                            <Link href=''>
                                <ChakraText  color={styles.neut600}>Licenses</ChakraText>
                            </Link>
                        </Box>

                    </Box>




            </Box>

            <Box mt={{base:'2em',lg:0}}  flex={1} borderRadius={'20px'} bg={styles.sec3} p='1.1em' >
                <Flex>
                    <Box bg={styles.pry} borderRadius='16px' padding='0.8em'>
                        <Image src="compass.svg" height='20px' />
                    </Box>
                </Flex>

                <Header hVariant="h4" mt={'0.7em'}>Become an influencer</Header>

                <ChakraText color={styles.neut600} > 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque, ducimus, expedita cupiditate saepe 
                    harum minima eum eveniet aliquid tenetur, 
                    cumque ipsam eos nostrum. Rerum pariatur est corporis deserunt temporibus? 
                </ChakraText>

                <ChakraButton mt='1em' w={'full'} btnVariant='primary1' btnSize='small'>
                    JOIN NOW 
                </ChakraButton>
                 
            </Box>

        </SimpleGrid>
        


    )
}

export default Footer;
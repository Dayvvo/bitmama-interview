import { Box, Center, Flex, Image, Input } from "@chakra-ui/react"
import useStylesHook from "../../hooks/useStyles"
import Header from "../../components/Header"
import Navbar from "../../screens/sections/nav"
import ChakraText from "../../components/Text"
import ChakraButton from "../../components/ChakraButton"
import Link from "next/link"


const Login = ()=>{

    const styles = useStylesHook();

    return(

        <Flex minH='100vh' direction={'column'}>

            <Navbar/>

            <Flex align='center' p='1em' justifyContent={'center'}  bg='url("/assets/image 31.png")' bgSize={'cover'} flexGrow={1}>
                
                <Box bg={styles.neut100} borderRadius='8px'  p='3em 2em' >
                    
                    <Center>
                        <Header hVariant="h2"> Log in and get exploring!  </Header>
                    </Center>

                    <Center mt={{base:'0.6em',sm:'1.5em',lg:'2em' }}>
                        <ChakraText> 
                            Log into your account  with your email  or create one below. 
                        </ChakraText>
                    </Center>


                    <Center mt={{sm:'1.4em', lg:'2.3em'}}>
                        <Flex w={{base:'full',lg:'unset'}} direction={'column'}>

                            <ChakraText weight={700} fontWeight={700}  color={styles.neut600} >
                                Email 
                            </ChakraText>

                            <Input mt='0.5em' p='1.6em' w={{base:'280px',lg:'340px'}} 
                             placeholder="Enter your email" />

                            <ChakraButton maxW={{sm:'280px',lg:'340px'}} 
                             btnVariant='primary1'  mt='1.5em' 
                             w='full' btnSize='larger' > 
                                Continue 
                            </ChakraButton>

                            <Center py={{base:'1.5em',lg:'2em'}}>
                                <ChakraText>or continue with </ChakraText>
                            </Center>

                            <ChakraButton maxW={{sm:'280px',lg:'340px'}} 
                             btnVariant='sec1' w='full' btnSize="larger" > 

                                <Flex align='center'> 
                                    <Image src='/assets/google-svg.svg' />

                                    <ChakraText  ml='0.3em' fontWeight={700} color={styles.neut600} >
                                        Continue 
                                    </ChakraText>
                                </Flex>

                            </ChakraButton>

                        
                        </Flex>

                    </Center>

                    <ChakraText mt={'1em'}>

                        <ChakraText display={'inline'} fontSize='13px' fontWeight={700}>By creating an account, you agree to our  </ChakraText>
                        <ChakraText display={'inline'} fontSize='13px' fontWeight={700} 
                          hVariant="link"><Link href='/'>  Terms & Conditions  </Link></ChakraText> 
                        <ChakraText display={'inline'} fontSize='13px' fontWeight={700}>  and</ChakraText>
                    
                        <ChakraText display={'inline'} fontSize='13px' fontWeight={700} hVariant="link" > 
                            <Link href='/'> Privacy Policy. </Link> 
                        </ChakraText> 

                    </ChakraText>

                </Box>



            </Flex>


        </Flex>


    )


}


export default Login
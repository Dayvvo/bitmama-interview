import {  Box,  Flex, Center, SimpleGrid,Text,Image  } from "@chakra-ui/react"
import useStyleHooks from '../../hooks/useStyles';
import Header from '../../components/Header';
import { InputGroup } from "@chakra-ui/react";
import { InputLeftElement } from "@chakra-ui/react";
import {FiSearch} from 'react-icons/fi'
import { Input } from "@chakra-ui/react";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiHeartPulseLine } from "react-icons/ri";
import ChakraButton from "../../components/ChakraButton";
import EventSection from "./eventsection";
import Carousel from "../../components/Carousel";

const Hero = ()=>{
    const styles = useStyleHooks();

    return( 

        <>


            <Box position={'relative'}>

                <Flex zIndex={100} px={['1em','1.5em','3em','5em']} position='absolute' h='full' left={0} top={0}  align='center'>
                    <Box  bg={styles.neut300} minW={{lg:'540px'}}  borderRadius={'8px'} p='1.2em'>

                        <Header hVariant='h2'>  
                            Find amazing things to do. 
                        </Header>
                        <Header hVariant="h2">
                            Anytime, anywhere in Lagos. 
                        </Header>

                        <InputGroup mt='0.8em' bg='white' h='40px'>
                            <InputLeftElement pointerEvents={'none'}>
                                <FiSearch fontSize={'13px'}/>
                            </InputLeftElement>
                            <Input type='text' placeholder='Lekki, Gbagbada, Oshodi' />
                        </InputGroup>

                        <Flex justify={'space-between'}>

                            <InputGroup mt='0.8em' borderRadius={'8px'} flex={0.2} bg='white' h='40px'>
                                <InputLeftElement pointerEvents={'none'}>
                                    <AiOutlineCalendar fontSize={'15px'}/>
                                </InputLeftElement>
                                <Input px={2}  type='date' fontSize='12px' placeholder='Date' />
                            </InputGroup>


                            <InputGroup mt='0.8em' borderRadius={'8px'} flex={0.7} bg='white' maxW={'320px'} h='40px'>
                                <InputLeftElement pointerEvents={'none'}>
                                    <RiHeartPulseLine fontSize={'15px'}/>
                                </InputLeftElement>
                                <Input type='text' placeholder='Surfing, parties/restaurant' />
                            </InputGroup>

                        </Flex>


                        <Flex mt='1.5em' justify={'flex-end'}>
                            <ChakraButton btnVariant='primary1' btnSize='large'>
                                Search
                            </ChakraButton>
                        </Flex>

                    </Box>
                </Flex>


                <Carousel arrows={false}>
                    {
                        [1,2,3]
                        .map(value=> <Box key={value} bg='url("hero.png")' h={['450px','450px','500px']}></Box>) 
                    }

                </Carousel>



            </Box>


            <Box display={{base:'none',lg:'block'}}>
                <Center py='2.5em' px={{base:'1em',md:0}}> 
                    <Header hVariant="h2" textAlign={['center','center','left']} >  
                        What are you in the mood for? 
                    </Header>
                </Center>


                <SimpleGrid px={'2em'}  columns={[1,2,3,5]} spacingY={['2em']} >

                    {['eat','drink','events','club','reacreation'].map((value,index)=> 
                        <Box key={index}>
                            <Box minH={'400px'} bgSize={'cover'} bg={`url("/assets/column${index+1}.png")`} >
                            </Box>       
                            <Center mt='0.8em'> <Header light hVariant="h4"> {value.toUpperCase()} </Header> </Center>    
                        </Box>
                    )}  

                </SimpleGrid>

            </Box>

            <SimpleGrid 
             mx={['1em','1.5em','3em','5em']}
             mt='4em' 
             bg={styles.sec3}
             columns={{sm:3,lg:3}}
             borderRadius='15px'
             
             >
                <Flex py='2em' justify={'center'}>

                    <Box>
                        <Center>
                            <Box maxW='190px'>
                                
                                <Header hVariant="h4" textAlign={'center'} light fontWeight={600} color='black'> 
                                    Your  entire  trip in one checkout!                                
                                </Header>

                                <Text my='0.8em' align='center' fontWeight={400}   fontSize='16px'>
                                    Add multiple experiences to your cart and checkout on one click.
                                </Text>
                                <Center> <Image src='/assets/cart-blue.svg' /> </Center>

                            </Box>

                        </Center>

                    </Box>

                </Flex>
                


                <Flex py='2em' justify={'center'}>

                    <Box>
                        <Center>
                            <Box maxW='190px'>
                                
                                <Header hVariant="h4" textAlign={'center'} light fontWeight={600} color='black'> 
                                    Pay with crypto on the go                               
                                </Header>

                                <Text my='0.8em' align='center' fontWeight={400}   fontSize='16px'>
                                    Add multiple experiences to your cart and checkout on one click.
                                </Text>

                                <Center> <Image src='/assets/wallet.svg' /> </Center>

                            </Box>

                        </Center>

                    </Box>

                </Flex>


                <Flex py='2em' justify={'center'}>

                    <Box>
                        <Center>
                            <Box maxW='190px'>
                                
                                <Header hVariant="h4" textAlign={'center'} light fontWeight={600} color='black'> 
                                    Free Cancellation and ticket transfer                               
                                </Header>

                                <Text my='0.8em' align='center' fontWeight={400}   fontSize='16px'>
                                    Add multiple experiences to your cart and checkout on one click.
                                </Text>

                                <Center>

                                    <Image src='/assets/tickets.svg' />

                                </Center>

                            </Box>


                        </Center>

                    </Box>

                </Flex>



                


            </SimpleGrid>


            <Box
             px={['1em','1.5em','3em','5em']}
             mt='4em' 
             bg={styles.sec3}
             py='2em'
            >
                <Header  hVariant="h3"  >
                    Top things to do in Lagos
                </Header>

                <SimpleGrid mt={'1.5em'} spacingX={['1.5em','2em']} spacingY='2.5em' columns={[1,1,2,3,4]} >
                    {
                        [1,2,3,4,5,].map((entry)=>
                            <Box w={{base:'full', lg:'240px'}} key={entry}>
                                <Image height={'230px'} width='full' borderRadius='17px' src={`/assets/column${entry}.png`} />
                                <Center>
                                    <Header light fontWeight={600} py='0.3em' fontSize={'20px'}> Lorem Ipsum  </Header>
                                </Center>
                            </Box>    
                            
                        )
                    }

                </SimpleGrid>
            </Box>

            <EventSection/>


            <Box mt='3.5em'>
                <Flex py='2em' px={['1em','1.5em','3em','3.5em']}>

                    <Header hVariant="h4"   >
                        See what people are experiencing with 
                    </Header>

                    <Header ml='0.2em' hVariant="h4" color={styles.pry}  >
                        Chillsbay? 
                    </Header>
                    
                </Flex>


                <SimpleGrid px={'2em'}  columns={[1,2,3,5]} spacingY={['2em']} >

                    {['eat','drink','events','club','reacreation'].map((value,index)=> 
                        <Box key={value}>
                            <Box minH={'250px'} bgSize={'cover'} bg={`url("/assets/column${index+1}.png")`} >
                            </Box>       
                        </Box>
                    )}  

                </SimpleGrid>

            </Box>

        </>

    )
}

export default Hero
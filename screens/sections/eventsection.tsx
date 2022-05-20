import { Box, Flex, Image } from "@chakra-ui/react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ChakraText from "../../components/Text";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import useStylesHook from "../../hooks/useStyles";
import ChakraButton from "../../components/ChakraButton";
import LocationIcon from "../../components/LocationIcon";


const EventSection =()=>{

    const style = useStylesHook();

    return(

        <Box
         py='4em'
         overflowX={'hidden'}

       >
            <Box
             px={['1em','1.5em','3em','3.5em']} >
                <Header py='1.2em' hVariant="h4">Upcoming events this weekend</Header>                
            </Box>     

            <Box px={['1em','1.5em','3em','5em']} >

                <Carousel>

                    {
                        [1,2,3,4].map(entry=>

                            <Flex className='carouselbox' direction={{base:'column', lg:'row'}}  display='flex !important' key={entry}>
                                <Image borderRadius={'20px'} bgSize={'contain'} bgRepeat={'no-repeat'} 
                                src={`dummy/wiz.png`} w={['full','full','500px','600px']} h={['full','full','500px','600px']} />


                                <Flex className='carouselText'   h={['full','full','500px','600px']}  direction={'column'}  py='2em' ml={{lg:'2.5em'}} flexGrow={{lg:1}}>
                                    <Box>

                                        <Header hVariant="h2" maxW={'220px'} >
                                            Wizkid made in lagos tour
                                        </Header>

                                        <ChakraText mt='1.5em'> 
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur voluptates at, 
                                            provident unde dignissimos consequuntur quae consectetur possimus facere earum 
                                            aspernatur accusantium minima laborum, veniam numquam voluptate expedita nostrum! 
                                        </ChakraText>

                                    </Box>

                                    <Box mt={{base:'2em', lg:'auto'}} maxW={'280px'}>
                                        <Flex justify='space-between'>
                                            <Flex align='center'> 
                                                <AiFillCalendar fontSize={'25px'} color={style.pry} />
                                                <ChakraText ml='0.4em' fontSize={'16px'} fontWeight={600}> 
                                                    Dec 12, 2022 
                                                </ChakraText>
                                            </Flex>

                                            <Flex align='center'> 
                                                <LocationIcon  />
                                                <ChakraText ml='0.4em' fontSize={'16px'} fontWeight={600}> 
                                                    TBS Lagos 
                                                </ChakraText>
                                            </Flex>



                                        </Flex>

                                        <Flex mt='1.5em' justify='space-between'>
                                            <Flex align='center'> 
                                                <AiFillClockCircle fontSize={'25px'} color={style.pry} />
                                                <ChakraText ml='0.4em' fontSize={'16px'} fontWeight={600}> 
                                                    Dec 12, 2022 
                                                </ChakraText>
                                            </Flex>


                                        </Flex>

                                        <Flex mt='3em' justify='space-between'>
                                            <ChakraButton minW={'120px'} btnVariant='sec1' btnSize='small'>Add to Cart</ChakraButton>

                                            <ChakraButton minW={'120px'} btnVariant='primary1' btnSize='small'>Book now</ChakraButton>

                                        </Flex>


                                    </Box>
                                </Flex>

                            </Flex>
                        )                

                                
                    }  

                </Carousel>
            </Box>

        </Box>


    )




}


export default EventSection;
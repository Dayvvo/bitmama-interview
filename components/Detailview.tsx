import {Box, Circle, Flex, Grid, Image, Input, Select, SimpleGrid, Textarea} from '@chakra-ui/react'
import { useState } from 'react';
import { BsCheckCircleFill, BsFillTelephoneFill } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import useStylesHook from '../hooks/useStyles';
import ChakraButton from './ChakraButton';
import Header from './Header';
import ChakraText from './Text';


export const Precautions = (styles:any)=>                   
<Box mt='1.5em' borderTop={styles.border1} pt='2em' >

<Header hVariant='h3'> 
    Safety Precautions 
</Header>


<SimpleGrid mt='0.8em' spacingX={'1.5em'} columns={{sm:1,md:2}} >
    <Box>
        <ChakraText weight={700} fontWeight={700}  color={styles.neut600} >Cleaning and sanitizing </ChakraText>

        {
            ['Surfaces sanitized between seatings', 
             'Digital, disposable or sanitized menu provided', 
             'Common areas deep-cleaned daily'].map((measure,index)=>
             <Flex mt='0.4em' align='center' key={index}>
                 <BsCheckCircleFill color={styles.pry} fontSize='16px' />

                 <ChakraText ml='0.5em'> {measure} </ChakraText>
             </Flex>
            )
        }

    </Box>

    <Box>
        <ChakraText weight={700} fontWeight={700}  color={styles.neut600} >Screening </ChakraText>

        {
            ['Sick Staff prohibited in the workplace'].map((measure,index)=>
             <Flex mt='0.4em' align='center' key={index}>
                 <BsCheckCircleFill color={styles.pry} fontSize='16px' />

                 <ChakraText ml='0.5em'> {measure} </ChakraText>
             </Flex>
            )
        }

    </Box>

</SimpleGrid>

</Box>


const DetailView = ({
    path1,path2,title,images,logo,other
}:{
    path1:string,
    path2:string,
    images:string[],
    title:string,
    logo:string,
    other?:any

})=>{

    const styles = useStylesHook();

    const [links,setLinks ] = useState({
        active:0,
        payload:images
    })
    return(
        <Box
         px={['1em','1.5em','3em','3.5em']}
         mt={{base:'2em',}}
        >

            <Flex align='center'>
                <ChakraText hVariant='primary' > {path1} </ChakraText>
                <ChakraText ml='0.2em' hVariant='link'>/{path2}</ChakraText>
            </Flex>

            <Grid templateColumns={{lg:'64% 35%'}} 
             columnGap={{lg:'3%'}} rowGap='3em'>

                <Box>
                    <Flex>
                        <Circle> <Image maxH={'550px'} src={logo}/> </Circle>
                        <Header  ml='0.8em' hVariant='h1'>Nok by Alara</Header>    
                    </Flex>


                    <Image src={links.payload[links.active]} 
                     maxH={'550px'}
                     borderRadius='32px' w='full' />

                    <Flex mt='1.5em'>
                        {links?.payload?.map((linkImg,index)=><Image borderRadius={'8px'} w='120px' mr='1.2em' src={linkImg} key={index}  />
                        
                        )}                        
                    </Flex>

                    {Precautions(styles)}

                    {other}


                </Box>

                
                <Box maxW={'400px'} 
                 boxShadow={styles.shadow1} p='2em'>

                     <Header hVariant='h4'>Make a Reservation</Header>

                     <ChakraText color={styles.neut600} fontSize='13px' mt='1.5em'>
                         There is a refundable booking fee of #5000 per person. The total 
                         number of party will be summed below.
                     </ChakraText>


                     <Select mt='1.5em' fontSize={'14px'} h='45px' placeholder='Select option'>
                        <option value='option1'>2 JetSkis and Accessories</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>

                    <Flex  gap='1em' mt='1.5em' justifyContent={'center'}>
                        <Input fontSize={'14px'} flex={1} h='45px' type='date' />

                        <Input fontSize={'14px'} flex={1} h='45px' type='time' />

                    </Flex>


                    <Textarea mt='2em' placeholder='Tell us more about your reservation and accesibility needs'
                     p='1em 1.2em' borderRadius={'8px'}  />


                    <ChakraText color={styles.neut600} fontSize='13px' mt='1.5em'>
                        Please note that this fee will be applied towards your reservation balance. 
                     </ChakraText>


                    <Flex align='center' mt='2em' px='0.2em' justify={'space-between'}>

                        <Header hVariant='h5'>Booking</Header>

                        <Header hVariant='h4'>NGN{50000} </Header>

                    </Flex>

                    <Grid>

                        <ChakraButton mt='1.5em'  btnVariant='primary1' btnSize='larger'>RESERVE NOW</ChakraButton>

                        <ChakraButton mt='1em' btnVariant='sec1' btnSize='larger'>RESERVE NOW</ChakraButton>

                        <Box>
                            <Image mt='2em' display={{base:'none',lg:'initial'}} borderRadius={'16px'} src='/assets/map.png'  />

                            <Flex align='center' mt='1.5em'> 
                                <TiLocation fontSize={'45px'} color={styles.pry} />
                                <ChakraText color={styles.neut600} ml='0.8em' fontSize={'14px'} fontWeight={600}> 
                                    12a Akin Olugbade St, Victoria Island 106104, Lagos, Nigeria
                                </ChakraText>
                            </Flex>
                            <Flex align='center' mt='1em'> 
                                <Flex px='0.4em'>
                                    <BsFillTelephoneFill  fontSize={'22px'} color={styles.pry} />
                                </Flex>
                                <ChakraText color={styles.neut600} ml='0.8em' fontSize={'14px'} fontWeight={600}> 
                                    +234 908 561 4815
                                </ChakraText>
                            </Flex>



                        </Box>
                    
                    
                    </Grid>





                </Box>


            </Grid>
            

        </Box>
    )
}


export default DetailView;
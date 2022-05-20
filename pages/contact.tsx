import Nav from '../screens/sections/nav'
import Footer from '../screens/sections/footer'
import { Box, Container, Grid, FormControl, Input, Select, Textarea } from '@chakra-ui/react';
import Header from '../components/Header';
import Text from '../components/Text';
import ChakraButton from '../components/ChakraButton';
import useStyles from "../hooks/useStyles";


const Contact =()=>{
    const styles = useStyles()

    return(
        <>
            <Nav/>

            <Box
            px={['1em','1.5em','3em','3.5em']} 
            >
                <Container maxW='1200px' mt='40px' mb='50px'>
                    <Grid templateColumns='repeat(2, 1fr)' gap='20'>
                        <Box mt='30px'>
                            <Header hVariant='h1' color={styles.neut700}>
                                Contact Us
                            </Header>
                            <Text hVariant='link' color={styles.neut600} mt='10px'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc, quisque ultricies netus elit massa aliquam quis cras. Enim leo, in massa sapien facilisi netu.
                            </Text>
                            <Text mt='15px' color={styles.neut600} hVariant='link'>(840) 371 - 2514</Text>
                            <Text mt='15px' color={styles.neut600} hVariant='link'>chills@chillsbay.com</Text>
                        </Box>
                        <FormControl bg={styles.sec3} w='600px' p='40px 20px 40px 60px' borderRadius='24px' boxShadow={styles.shadow1}>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Box>
                                    <Header hVariant='h4' color={styles.neut700} mb='10px'>First Name</Header>
                                    <Input id='first-name' placeholder='First name' borderWidth='1px' borderColor={styles.neut300} borderRadius='14px' bg={styles.neut100} />
                                </Box>
                                <Box>
                                    <Header hVariant='h4' color={styles.neut700} mb='10px'>Last Name</Header>
                                    <Input id='last-name' placeholder='Last name' borderWidth='1px' borderColor={styles.neut300} borderRadius='14px' bg={styles.neut100} />
                                </Box>
                                <Box></Box>
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='space-between' mt='20px'>
                                <Box>
                                    <Header hVariant='h4' color={styles.neut700} mb='10px'>Email</Header>
                                    <Input id='email' type='email' placeholder='Email Address' borderWidth='1px' borderColor={styles.neut300} borderRadius='14px' bg={styles.neut100} />
                                </Box>
                                <Box>
                                    <Header hVariant='h4' color={styles.neut700} mb='10px'>Phone</Header>
                                    <Input id='phone-number' type='number' placeholder='Phone Number' borderWidth='1px' borderColor={styles.neut300} borderRadius='14px' bg={styles.neut100} />
                                </Box>
                                <Box></Box>
                            </Box>                            
                            <Box mt='20px' mr='50px'>
                                <Header hVariant='h4' color={styles.neut700} mb='10px'>Subject</Header>
                                <Select id='subject' placeholder='Select Option' borderWidth='1px' borderColor={styles.neut300} borderRadius='14px' bg={styles.neut100}></Select>
                            </Box>                            
                            <Box mt='20px' mr='50px'>
                                <Header hVariant='h4' color={styles.neut700} mb='10px'>Message</Header>
                                <Textarea id='message' borderWidth='1px' borderColor={styles.neut300} borderRadius='14px' bg={styles.neut100} />
                            </Box>                            
                            <ChakraButton mt='30px' btnVariant='primary1'>
                                SEND MESSAGE
                            </ChakraButton>
                        </FormControl>
                    </Grid>
                </Container>

                <Container maxW='900px' mt='100px' mb='50px'>
                    <Grid templateColumns='repeat(3, 1fr)' gap='10'>
                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                            <Box w='130px' h='130px' borderRadius='50%' bg={styles.sec1}></Box>
                            <Header hVariant='h4' color={styles.neut700} mt='20px' mb='10px'>
                                Become an influencer
                            </Header>
                            <Text color={styles.neut600} hVariant='link' mb='20px'>
                                Join a company that’s passionate about design and technology
                            </Text>
                            <Text color={styles.pry} hVariant='link' mb='20px'>
                                chills@chillsbay.com
                            </Text>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                            <Box w='130px' h='130px' borderRadius='50%' bg={styles.sec1}></Box>
                            <Header hVariant='h4' color={styles.neut700} mt='20px' mb='10px'>
                                Need Help?
                            </Header>
                            <Text color={styles.neut600} hVariant='link' mb='20px'>
                                Questions about using  Market? Our support team is here to help.
                            </Text>
                            <Text color={styles.pry} hVariant='link' mb='20px'>
                                chills@chillsbay.com
                            </Text>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                            <Box w='130px' h='130px' borderRadius='50%' bg={styles.sec1}></Box>
                            <Header hVariant='h4' color={styles.neut700} mt='20px' mb='10px'>
                                Refunds & Others
                            </Header>
                            <Text color={styles.neut600} hVariant='link' mb='20px'>
                                Find press releases and media coverage about Chillsbay
                            </Text>
                            <Text color={styles.pry} hVariant='link' mb='20px'>
                                chills@chillsbay.com
                            </Text>
                        </Box>                    
                    </Grid>
                </Container>

                <Container maxW='1500px' bg={styles.neut200} mt='40px' pt='80px' pb='100px'>
                    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                        <Header hVariant='h2' color={styles.neut700}>
                            Frequently Asked Questions
                        </Header>
                        <Text color={styles.neut600} hVariant='link' mt='10px' mb='20px'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem <br/> volutpat at at. Ultricies erat leo risus, eget venenatis tristique morbi.
                        </Text>
                    </Box>
                    <Box bg={styles.neut100} boxShadow={styles.shadow2} m='auto' w='772px' borderRadius='20px'>
                        <Box display='flex' flexDirection='column' alignItems='left'>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Header mt='30px' ml='30px' hVariant='h4' color={styles.neut700}>
                                    Do you offer refunds for purchased products?
                                </Header>                                
                            </Box>
                            <Text ml='30px' color={styles.neut600} hVariant='link' mt='10px' mb='20px'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.
                            </Text>
                        </Box>
                    </Box>
                    <Box bg={styles.neut100} boxShadow={styles.shadow2} m='auto' w='772px' borderRadius='20px'>
                        <Box mt='30px' display='flex' flexDirection='column' alignItems='left'>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Header pb='30px' mt='30px' ml='30px' hVariant='h4' color={styles.neut700}>
                                    How does Chillsbay work?
                                </Header>                                
                            </Box>                        
                        </Box>
                    </Box>
                    <Box bg={styles.neut100} boxShadow={styles.shadow2} m='auto' w='772px' borderRadius='20px'>
                        <Box mt='30px' display='flex' flexDirection='column' alignItems='left'>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Header pb='30px' mt='30px' ml='30px' hVariant='h4' color={styles.neut700}>
                                    Can I pay with Crypto on Chillsbay.com? 
                                </Header>                                
                            </Box>                        
                        </Box>
                    </Box>
                    <Box bg={styles.neut100} boxShadow={styles.shadow2} m='auto' w='772px' borderRadius='20px'>
                        <Box mt='30px' display='flex' flexDirection='column' alignItems='left'>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Header pb='30px' mt='30px' ml='30px' hVariant='h4' color={styles.neut700}>
                                    How can I become a Chillsbay Host?
                                </Header>                                
                            </Box>                        
                        </Box>
                    </Box>
                </Container>        


            </Box>
            

            <Footer/>
            
        
        </>
    )
}

export default Contact;
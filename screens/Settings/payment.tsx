import { Box, Center, Image } from "@chakra-ui/react";
import useStylesHook from "../../hooks/useStyles";
import ChakraText from "../../components/Header"
import Header from "../../components/Header";
import ChakraButton from "../../components/ChakraButton";



const Payment = ()=>{

    const styles  = useStylesHook()
    return(

        <Box p={{base:'1em', md:'2em 1.8em'}}  borderRadius='8px' 
         boxShadow={styles.shadow1} >
            <Header  
             hVariant='h5'
             >
                Payment Methods
            </Header>

            <Center  
            >   
                <Box>
                    <Center>                    
                        <Image  src='/assets/nomethods.svg' />
                    </Center>
                    <Box>
                        <Center>
                            <ChakraText fontWeight={700}>No Payment Methods Added</ChakraText>
                        </Center>
                        <Center mt='0.5em'>
                            <ChakraText >
                                Add a payment method to your account for faster 
                            </ChakraText>
                        </Center>
                        <Center mt='0.5em'>
                            <ChakraText >
                                checkouts with reservation holds, takeout, experiences, and much more.
                            </ChakraText>
                        </Center>


                        <Center mt='1.5em'>
                            <ChakraButton p='1.2em 1.2em' btnVariant="primary1">
                                Add Payment Method
                            </ChakraButton>
                        </Center>



                    </Box>

                </Box>


            </Center>

    

        </Box>

    )
}

export default Payment;

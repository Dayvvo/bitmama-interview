import { Box, Center, Flex,  Input, Text } from "@chakra-ui/react"
import useStylesHook from "../../hooks/useStyles"
import Header from "../../components/Header"
import ChakraText from "../../components/Text"
import ChakraButton from "../../components/ChakraButton"
import Router, { useRouter } from 'next/router'
import { useState } from "react"
import moment from 'moment';
import useIsAuth from "../../hooks/useIsAuth"

const Login = ()=>{

    const styles = useStylesHook();

    const {query}= useRouter();


    !query?.shouldRedirect && useIsAuth();

    const [state,setState]= useState({
        userName:'',
        error:''
    });

    

    const submitLogin = ()=>{

        if (!state.userName) {
            setState({...state,error:'This field is required'})
        }
        else if( state.userName.split(' ').length > 1 )             
            setState({...state,error:'Username must be a single word/phrase'})

        else{
            let bitMama = localStorage.getItem('bitmama-logs')
             localStorage.setItem('bitmama-logs',JSON.stringify({
                ...JSON.parse(bitMama),
                [state.userName.toLowerCase()]:{ last_seen: moment(),lastSeenInSeconds:moment.now() }
             })
            )
            Router.push('/home');



   
        }

    }

    

    return(

        <Flex minH='100vh' direction={'column'}>


            <Flex align='center' p='1em' justifyContent={'center'}  bg='url("/assets/image 31.png")' bgSize={'cover'} flexGrow={1}>
                
                <Box bg={styles.neut100} borderRadius='8px'  p='3em 2em' >
                    
                    <Center>
                        <Header hVariant="h2"> Log in and get exploring!  </Header>
                    </Center>

                    <Center mt={{base:'0.6em',sm:'1em',lg:'1em' }}>
                        <ChakraText> 
                            Log into your account  with your username. 
                        </ChakraText>
                    </Center>


                    <Center mt={{sm:'1.4em', lg:'1.3em'}}>
                        <Flex w={{base:'full',lg:'unset'}} direction={'column'}>

                            <ChakraText weight={700} fontWeight={700}  color={styles.neut600} >
                                Username 
                            </ChakraText>

                            <Input onChange={e=>setState({...state,userName:e.target.value})} 
                             onFocus={()=>setState({...state,error:''})} value={state.userName} mt='0.5em' 
                             p='1.6em' w={{base:'280px',lg:'340px'}} 
                             placeholder="Enter your username" 
                            />

                            <Text color='red' fontSize={'13px'} mt='1em'>
                                {state.error || ''} 
                            </Text>

                            <ChakraButton onClick={submitLogin} maxW={{sm:'280px',lg:'340px'}} 
                             btnVariant='primary1'  mt='1.5em' 
                             w='full' btnSize='larger' > 
                                Continue 
                            </ChakraButton>



                        
                        </Flex>

                    </Center>

                </Box>



            </Flex>


        </Flex>


    )


}


export default Login
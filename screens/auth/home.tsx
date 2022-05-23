import { Box, Center, Flex,   Text,useDisclosure } from "@chakra-ui/react"
import useStylesHook from "../../hooks/useStyles"
import Header from "../../components/Header"
import ChakraButton from "../../components/ChakraButton"
import { useEffect, useRef, useState } from "react"
import moment from "moment"
import useIsAuth from "../../hooks/useIsAuth"
import Router from "next/router"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
} from '@chakra-ui/react'


const Home = ()=>{

    const styles = useStylesHook();


    const [shouldCheckAuth,setShouldCheckAuth] = useState<boolean | undefined>(undefined);

    const currentUsername = useRef<string>('');

    const timeOutRef = useRef<any>(null);

    const onVisibilityChange= ()=>{
        setShouldCheckAuth(prev=> prev===undefined?false: !prev);
        if (timeOutRef.current !==null && document.visibilityState==='visible') {
            console.log('cancelled');
            clearTimeout(timeOutRef.current);
            timeOutRef.current=null
        }
         
        if (document.visibilityState==='hidden') {
            const lastSeen = moment();
            const lastSeenInSeconds= moment.now();
        
            timeOutRef.current=
            setTimeout(() => {
                let bitmamaLogs = JSON.parse(localStorage.getItem('bitmama-logs'));
                localStorage.setItem('bitmama-logs',JSON.stringify({...bitmamaLogs,
                    [usersPayload[0]?.username]:{ 
                        last_seen:lastSeen,
                        lastSeenInSeconds
                    }  
                }))

            }, 30000);

        }
         
    }


    const [usersPayload,setusersPayload] = useState([])


    const [payloadPopulated,setPayloadPopulated] = useState(false)


    const setUsersPayloadref = useRef<any>(setusersPayload)


    useIsAuth()

    useEffect(()=>{
        if(payloadPopulated) {
            document.addEventListener('visibilitychange',onVisibilityChange)
        }
        
    },[payloadPopulated])

    useEffect(()=>{

        const sortUsers=()=>{
            let userTokenArr = [];
            let token = JSON.parse( localStorage.getItem('bitmama-logs'));

            for (const key in token) {
                userTokenArr.push({ 
                    username:key,  
                    last_seen:token[key]?.last_seen,
                    lastSeenInSeconds:token[key]?.lastSeenInSeconds
            });
            }
            let sortedArr = userTokenArr.sort((a,b)=>b?.lastSeenInSeconds-a?.lastSeenInSeconds)
            setUsersPayloadref.current(sortedArr);

            console.log('sorted Arr',sortedArr)
            currentUsername.current= (sortedArr[0].username);
            setPayloadPopulated(true);
        }

        sortUsers();
    
    },[])
    
    
    useEffect(()=>{
        let bitmamaLogs = JSON.parse(localStorage.getItem('bitmama-logs'));

        !bitmamaLogs[currentUsername.current] && shouldCheckAuth !==undefined  && Router.push({
            pathname:'/', 
            query:{shouldRedirect:'false'}
        })

    },[shouldCheckAuth])



    
    const logoutorSwitch = (switchAccount?:boolean,index=0)=>{
        
        index && document.removeEventListener('visibilitychange',onVisibilityChange);
        
        if(!switchAccount){

            if(usersPayload.length===1 ){
                localStorage.removeItem('bitmama-logs');

                Router.push('/')
            }
            else{    
                let tokenObj = JSON.parse((localStorage.getItem('bitmama-logs')));
            
                delete tokenObj[usersPayload[index]?.username];

                tokenObj && localStorage.setItem('bitmama-logs',JSON.stringify(tokenObj))

                !index &&  Router.push({pathname:'/',query:{shouldRedirect:'false'}})
            }
        }
        else{
            Router.push({pathname:'/',query:{shouldRedirect:'false'}})

        }
    }


    const returnCapitalizeString = (input:string)=> input?.charAt(0)?.toUpperCase()+ input?.substring(1,input.length)

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
            <Modal isOpen={isOpen} isCentered onClose={onClose}>
    
                <ModalOverlay />
    
                <ModalContent py='2em'>
                    <ModalHeader>Sessions</ModalHeader>
                    <ModalBody>
                        {usersPayload.map((payload,index)=>
                        {
                            let diff =moment().diff(payload?.last_seen,'seconds')

                            return<Flex align='center' key={index}> 
                            <Box>
                                <Text fontSize={'14px'}> Username </Text>
                                <Text  fontSize={'20px'}>{returnCapitalizeString(payload?.username)} </Text>
                            </Box>
                            <Box ml='1.5em'>
                                <Text fontSize={'14px'}> Status </Text>
                                <Text fontSize={'20px'} > 
                                    {diff >30  && index ?'Idle': 'Active'   } 
                                </Text>
                            </Box>

                            <ChakraButton ml={'2em'} onClick={()=>{
                                logoutorSwitch(false,index)
                                index && setusersPayload(usersPayload.filter(item=> item.username !== payload?.username ))    
                            }} btnSize='small' btnVariant='primary1'>Logout</ChakraButton>


                        </Flex>
                        }
                        
                        )}

                    </ModalBody>

                </ModalContent>
    
            </Modal>


            <Flex onClick={onOpen} minH='100vh' align='center' p='1em' justifyContent={'center'}  
             bg='url("/assets/image 31.png")' bgSize={'cover'} flexGrow={1}  >
                
                <Box onClick={e=>e.stopPropagation()} bg={styles.neut100} borderRadius='8px'  p='3em 2em' >
                    
                    <Center>
                        <Header hVariant="h2"> Welcome {returnCapitalizeString(usersPayload[0]?.username)}  </Header>
                    </Center>



                    <Center mt={{sm:'1.4em', lg:'1.3em'}}>
                        <Flex w={{base:'full',lg:'unset'}} direction={'row'}  gap='1.2em'> 


                            <ChakraButton onClick={()=>logoutorSwitch()} maxW={{sm:'280px',lg:'340px'}} 
                                btnVariant='primary1'  mt='0.5em' 
                                w='full' btnSize='large' px='0.8em' > 
                                    <Text px='1em'> Logout   </Text> 
                                    
                            </ChakraButton>




                            <ChakraButton onClick={()=>logoutorSwitch(true)}  maxW={{sm:'280px',lg:'340px'}} 
                                btnVariant='sec1'  mt='0.5em' 
                                
                                w='full' btnSize='large' >
                                    <Text px='1em'> Switch account   </Text> 
                                
                            </ChakraButton>


                        </Flex>

                    </Center>

                </Box>


            </Flex>
        </>

    )


}


export default Home;
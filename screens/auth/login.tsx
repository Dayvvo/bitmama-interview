import { Box, Center, Flex,  Input, Select, Text } from "@chakra-ui/react"
import useStylesHook from "../../hooks/useStyles"
import Header from "../../components/Header"
import ChakraText from "../../components/Text"
import ChakraButton from "../../components/ChakraButton"
import Router from 'next/router'
import { useEffect, useState } from "react"

const Login = ()=>{

    const styles = useStylesHook();

    

    const [state,setState]= useState({
        name:'',
        tier:'one',
        amount:'',
    });

    const tierValues  ={
        'one': 10000,
        'two':20000,
        'three':30000
    }


    const [errors,setErrors] = useState({
        name:'',
        amount:'',
        tier:''
    })


    console.log('change',state.name,state.amount,errors)

    const submitLogin = ()=>{
        let errorcount = 0
        for (const key in state) {

            if (state[key]===''){ 
                setErrors({...errors, [key]:'This value is required' })
            }
            
            if (state.amount !==tierValues[state.tier] ) {
                setErrors({...errors,amount:`Members in tier one must pay an amount of ${tierValues[state.tier]}`  })
            }

        
            
        }

        for (const key in errors) {
            if (errors[key] ===''  ) {
               errorcount+=1; 
            }
        }

            localStorage.setItem('payload',JSON.stringify({name:state.name,tier:state.tier,amount:state.amount  })  )

            Router.push('/home')

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
                               Name
                            </ChakraText>

                            <Input type='text' onChange={e=>setState({...state,name:e.target.value})} 
                             onFocus={()=>setErrors({...errors,name:''})} value={state.name} mt='0.5em' 
                             p='1.6em' w={{base:'280px',lg:'340px'}} 
                             placeholder="Enter your name" 
                            />

                            <Text color='red' fontSize={'13px'} mt='1em'>
                                {errors.name || ''} 
                            </Text>



                            <ChakraText mt='1em' weight={700} fontWeight={700}  color={styles.neut600} >
                               Tier
                            </ChakraText>

                            <Select  onChange={e=>{
                                setState({...state,tier:e.target.value});
                                setErrors({...errors,tier:''})
                                }}>
                                <option value='one'>One</option>
                                <option value='two'>Two</option>
                                <option value='three'>Three</option>
                            </Select>

                            <Text color='red' fontSize={'13px'} mt='1em'>
                                {errors.tier || ''} 
                            </Text>


                            <ChakraText mt='1em' weight={700} fontWeight={700}  color={styles.neut600} >
                               Amount
                            </ChakraText>

                            <Input type='number' onChange={e=>setState({...state,amount:parseInt(e.target.value)})} 
                             onFocus={()=>setErrors({...errors,amount:''})} value={state.amount} mt='0.5em' 
                             p='1.6em' w={{base:'280px',lg:'340px'}} 
                             placeholder="Enter your username" 
                            />

                            <Text color='red' fontSize={'13px'} mt='1em'>
                                {errors.amount || ''} 
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
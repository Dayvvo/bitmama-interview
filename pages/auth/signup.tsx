import { Box, Flex } from "@chakra-ui/react"
import Navbar from "../../screens/sections/nav"


const Login = ()=>{

    return(

        <Flex h='100' direction={'column'}>

            <Navbar/>

            <Box bg='url("assets/signupbg.png")' bgSize={'cover'} flexGlow={1}>
                

            </Box>


        </Flex>


    )


}


export default Login
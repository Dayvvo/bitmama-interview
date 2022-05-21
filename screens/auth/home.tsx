import { Box, Center, Flex, Text } from "@chakra-ui/react"
import useStylesHook from "../../hooks/useStyles"
import Header from "../../components/Header"
import { useEffect, useRef, useState } from "react"
import moment from "moment"

const Home = ()=>{

    const styles = useStylesHook();


    let timeOutRef = useRef<any>(null);

    const [usersPayload,setusersPayload] = useState([])


    console.log(' set user payload',setusersPayload);

    useEffect(()=>{
        document.addEventListener('visibilitychange',()=>{
           if (timeOutRef.current !==null && document.visibilityState==='visible') {
               console.log('cancelled')
               clearTimeout(timeOutRef.current);
               timeOutRef.current=null
            }
            
           if (document.visibilityState==='hidden') {
            
            timeOutRef.current=
            setTimeout(() => {
                let bitmamaLogs = JSON.parse(localStorage.getItem('bitmama-logs'));
 
                console.log('Timeout exceded',moment.now())

            }, 10000);
 
           }
            
        })
   
    },[])
   
    
 

    const [savings,setSavings] = useState([
        {
            name:'Adeshola Martins',
            amount:10000
        },

        {
            name:'Adeshola Martins',
            amount:20000
        },


        {
            name:'Adeshola Simon',
            amount:20000
        },


        {
            name:'Davis Martins',
            amount:10000
        },




        {
            name:'Samson Martins',
            amount:30000
        },



        {
            name:'Adeshola Martins',
            amount:30000
        },


    ])



    useEffect(()=>{
        let name =JSON.parse(localStorage.getItem('payload'));

        setSavings([...savings,name])
    },[])




    const calculateTotalAmt2 = ()=>{

        let total = 0;
        
        
        for (const iterator of savings) {
            total + iterator.amount    
        }

        return total
    }


    console.log('usersPayload',usersPayload);



    return(

        <Flex minH='100vh' direction={'column'}>


            <Flex align='center' p='1em' justifyContent={'center'}  bg='url("/assets/image 31.png")' bgSize={'cover'} flexGrow={1}>
                
                <Box bg={styles.neut100} borderRadius='8px'  p='3em 2em' >
                    
                    <Center>
                        <Header hVariant="h2"> Welcome {savings[savings.length-1]?.name}  </Header>
                    </Center>


                    <Center>
                        <Header hVariant="h2"> Total amount saved:  {calculateTotalAmt2()}  </Header>
                    </Center>


                    <Box mt={{sm:'1.4em', lg:'1.3em'}}>

                        {savings.map( (saving,key)=> 
                            <Box mt={key===0?0:'1em'}  key={key}>
                            <Text>Name : {saving.name}   </Text>    
                            
                            <Text>Amount : {saving.amount}   </Text>    
                            
                            </Box>
                        )}

                    </Box>

                </Box>



            </Flex>


        </Flex>


    )


}


export default Home;
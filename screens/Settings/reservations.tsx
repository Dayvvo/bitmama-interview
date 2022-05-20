import { Box, Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import Text from "../../components/Text";
import Header from "../../components/Header";
import useStylesHook from "../../hooks/useStyles";
import {GrCalendar} from 'react-icons/gr';
import {IoLocationOutline} from 'react-icons/io5'


const Reservations =()=>{

    const styles = useStylesHook()

    return(
        <Box p={{base:'1em', md:'1em 1.8em'}} boxShadow={styles.shadow1} >
            
            <Header hVariant="h4"> 
                {'You have no upcoming reservations'}
            </Header>

            <Text mt='1.3em'> 
                Find your next experience
            </Text>

            <SimpleGrid spacingY={'1em'} columns={{lg:3}} mt='1em'>

                <InputGroup 
                
                 borderRadius={'8px'}   
                 borderColor={styles.pry}
                 
                 bg='white' h='40px'>
                    <InputLeftElement pointerEvents={'none'}>
                        <GrCalendar fontSize={'15px'}/>
                    </InputLeftElement>
                    <Input type='date' 
                     fontWeight={600} 
                     _placeholder={{color:styles.neut700}} 
                     borderRightRadius={{lg:'0px'}}
                     borderRight={{lg:'none'}}  />
                </InputGroup>

                <InputGroup borderColor={styles.pry}                 
                 bg='white' h='40px'>
                    <InputLeftElement pointerEvents={'none'}>
                        <IoLocationOutline fontSize='20px' />
                    </InputLeftElement>
                    <Input type='text' placeholder="Location"
                     color={styles.neut700} fontWeight={600} _placeholder={{color:styles.neut700}}  
                     borderRadius={{base:'8px',lg:'0px' }} 
                    />
                </InputGroup>


                <InputGroup 
                
                 borderRadius={'8px'}   
                 borderColor={styles.pry}
                 
                 bg='white' h='40px'>
                    <InputLeftElement pointerEvents={'none'}>
                        <GrCalendar fontSize={'15px'}/>
                    </InputLeftElement>
                    <Input type='text'
                     placeholder="People" 
                     fontWeight={600} 
                     _placeholder={{color:styles.neut700}} 
                     borderLeftRadius={{lg:'0px'}}
                     borderLeft={{lg:'none'}}  />
                </InputGroup>



            </SimpleGrid>

            
            

        </Box>
    )
}


export default Reservations;
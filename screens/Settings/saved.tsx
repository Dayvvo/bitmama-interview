import { Box } from "@chakra-ui/react";
import useStylesHook from "../../hooks/useStyles";
import ChakraText from "../../components/Header"
import Header from "../../components/Header"



const Saved = ()=>{

    const styles  = useStylesHook()
    return(

        <Box  boxShadow={styles.shadow1} >
            <Header  
             p={{base:'1em', md:'1em 1.8em'}}
             hVariant='h5'
             >
                Saved Places
            </Header>

            <Box  
             p={{ md:'1.2em 1.8em'}}
            >

                <ChakraText>
                    You have no favorite place or experiences saved
                </ChakraText>



            </Box>

    

        </Box>

    )
}

export default Saved;

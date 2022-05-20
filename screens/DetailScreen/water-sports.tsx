import {  Box, Flex, SimpleGrid, Square } from "@chakra-ui/react"
import useStylesHook from "../../hooks/useStyles";
import DetailView from "../../components/Detailview"
import Header from "../../components/Header";



const WaterSports = ({i})=>{
    
    const styles = useStylesHook();


    const other = 
    <Box mt='3em'>

        <Header  hVariant="h3">Other Water Sports</Header>

        <SimpleGrid mt='2em' spacingY={'3em'} columns={{base:1,md:2,lg:3}}>
            {[1,2,3,4,5].map((name)=> 
                <Flex key={name}>
                    <Square borderRadius={'16px'} size={'150px'} bg={styles.sec3} >
                    </Square>  
                </Flex>
            ) 
            }
        </SimpleGrid>

    </Box>


    return(
        <DetailView
         path1="Water sports" path2="Nok by Alara"
         images={["/dummy/water-sports1.png","/dummy/water-sports2.png","/dummy/water-sports3.png","/dummy/water-sports4.png"]}
         logo='/dummy/Nog.svg'
         title="Club Quilox"
         other={other}
        />
    )
}


export default WaterSports;
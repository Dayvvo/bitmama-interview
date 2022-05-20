import { Box } from "@chakra-ui/react"
import Navbar from "../../screens/sections/nav";
import WaterSports from "../../screens/DetailScreen/water-sports";



const Restaurants = ()=>{

    
    return(
        <>
            <Navbar/>
            <WaterSports i='events' />
        </>
    )


}

export default Restaurants;
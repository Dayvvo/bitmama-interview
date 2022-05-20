import { Box } from "@chakra-ui/react"
import Navbar from "../../screens/sections/nav";
import RestaurantDetailScreen from "../../screens/DetailScreen/resaurants";



const Restaurants = ()=>{

    
    return(
        <>
            <Navbar/>
            <RestaurantDetailScreen />
        </>
    )


}

export default Restaurants;
import DetailView from "../../components/Detailview"



const RestaurantDetailScreen = ()=>{

    return(
        

        <DetailView
         path1="Restaurants" path2="Nok by Alara"
         images={["/dummy/food2.png","/dummy/food3.png","/dummy/food4.png",]}
         logo='/dummy/Nok.svg'
         title="Club Quilox"
        />
    )
}


export default RestaurantDetailScreen;
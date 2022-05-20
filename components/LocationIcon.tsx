import useStylesHook from '../hooks/useStyles';
import {TiLocation} from 'react-icons/ti'

const LocationIcon = ({
    color,fontSize
    
}:{color?:string,fontSize?:string})=>{

    const style = useStylesHook()

    return(
        <TiLocation fontSize={fontSize || '25px'} color={  color ||style.neut700} />
    )
}



export default LocationIcon;
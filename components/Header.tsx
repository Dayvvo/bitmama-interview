import { Text,TextProps } from "@chakra-ui/react"
import useStylesHook from "../hooks/useStyles"


interface headerProps{
    hVariant?: 'h1' |'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    light?:boolean
}

interface ChakraHeaderProps extends TextProps,headerProps{}

const Header =(props:ChakraHeaderProps)=>{
    
    const {hVariant,light,children,...rest} = props
    
    
    const stylesHook = useStylesHook()


    const styles = hVariant? {
        fontSize : hVariant==='h1'? '42px': hVariant==='h2'?'30px': hVariant==='h3'? '24px': hVariant==='h4'?'22px':'17px',
        fontWeight: light?500:700,
        color:stylesHook.neut700
        
    }:{}


    return(
        <Text {...styles} {...rest}>
            {children}
        </Text>
    )
}

export default Header;
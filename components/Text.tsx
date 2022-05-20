import { Text,TextProps } from "@chakra-ui/react"
import useStylesHook from "../hooks/useStyles"


interface headerProps{
    hVariant?: 'rich' |'link'  | 'neutral' | 'primary',
    light?:boolean,
    weight?:  700 |  600| 500,
    txtSize?:'small'
}

interface ChakraHeaderProps extends TextProps,headerProps{}

const ChakraText =(props:ChakraHeaderProps)=>{
    
    const {hVariant,light,weight,children,...rest} = props
    
    const stylesHook = useStylesHook()


    const styles = hVariant? {
        fontSize : hVariant==='rich'? '14px': hVariant==='link'?'16x':'14px',
        color:hVariant==='link'? stylesHook.neut600: hVariant==='neutral'?  stylesHook.neut700 : hVariant==='primary'? stylesHook.pry: stylesHook.pry ,
        fontWeight: weight || 400
    }:{}


    return(


        <Text {...styles} {...rest}>
            {children}
        </Text>

    )
}


export default ChakraText;
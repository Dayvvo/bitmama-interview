import { Button,ButtonProps } from "@chakra-ui/react"

import useStylesHook from "../hooks/useStyles";




interface btnProps{
    btnVariant?: 'primary1' |'primary2' | 'sec1' | 'sec2',
    btnSize?:'small' | 'large' | 'larger' ,
}

interface ChakraBtnProps extends ButtonProps,btnProps{}



const ChakraButton =(buttonProps?:ChakraBtnProps)=>{


    const {bg,btnSize,btnVariant,fontSize,color,children,...rest} =buttonProps as ChakraBtnProps; 

    const stylesHook = useStylesHook()


    const borderStyles =  btnVariant==='sec1' || btnVariant==='sec2' ? {
        border:`1px solid`,
        borderColor:`${ btnVariant==='sec1'?  stylesHook['pry']:stylesHook['neut100']}`,
    }:{border:'1px solid transparent'}

    const sizeStyles = btnSize==='large'? {
        fontSize:'17px',
        padding:'0.5em 1em',

    }:btnSize==='small'?{
        fontSize:'15px',
        padding:'0.3em 1em',
        
    }:btnSize==='larger'?
    {
        fontSize:'17px',
        padding:'1.6em 1em',

    }:{

    }

    const variantStyles = btnVariant==='primary1'? {
        bg:stylesHook.pry,
        color:'white'
    }:btnVariant==='primary2'? {
        bg:stylesHook.neut100,
        color:stylesHook.pry
    }:btnVariant==='sec1'? {
        bg:stylesHook.neut100,
        color:stylesHook.pry
    }:btnVariant==='sec2'?  {
        bg:stylesHook.neut700,
        color:stylesHook.neut100
    }:{}   

    return(

        <Button 
         {...variantStyles}
         {...borderStyles}
         {...sizeStyles}
         _hover={variantStyles}
         _active={ variantStyles }
         borderRadius='8px'

         {...rest}
         
        >
            {children}
        </Button>       
    )
}


export default ChakraButton;
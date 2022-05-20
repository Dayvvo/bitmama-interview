import {  Box, Button, Circle, Flex, Image,  } from "@chakra-ui/react"
import {BsChevronDown} from 'react-icons/bs'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Header from "../../components/Header";
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
import ChakraText from "../../components/Text";
import {RiWallet2Line, RiMenuLine} from 'react-icons/ri';
import useStylesHook from "../../hooks/useStyles";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import Link from "next/link";



const Navbar = ()=>{

    const styles = useStylesHook();

    const mobileRef = useRef<any>();


    const toggleSlide = ()=>{
        mobileRef?.current?.classList.toggle('slide');
    }
    // type of fles
    return(
        <Box
         py={['1.4em','1.4em']}
         px={['1em','1.5em','3em','3.5em']}
         
        >
            <Box onClick={toggleSlide} className='mobileNav'  ref={mobileRef}>
                <Flex  onClick={e=>e.stopPropagation()} flexGrow={1} direction={'column'} overflowY={'auto'} 
                 boxSizing='content-box' h='100%' w='75%' 
                 bg={styles.neut100} p='3em 1.5em'>
                    <Flex justify={'space-between'}>

                        <GrClose onClick={toggleSlide} color={styles.pry} fontSize='20px' />

                        <Image src="/logo.svg" height='35px' />
                        

                    </Flex>


                    <Flex flexGrow={1} direction={'column'}>

                        <Box py='2.5em' borderBottom={'1px solid #C4C4C4'}>

                            <Accordion allowMultiple>

                                <AccordionItem borderY={'none'}>
                                    <h2>
                                        <AccordionButton >
                                            <ChakraText fontSize={'18px'} fontWeight={600}   textAlign='left'>
                                                Eat & Drink
                                            </ChakraText>
                                            <AccordionIcon ml='1em' height={'25px'} />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem mt='1em' borderY={'none'}>
                                    <h2>
                                        <AccordionButton >
                                            <ChakraText fontSize={'18px'} fontWeight={600}   textAlign='left'>
                                                Events
                                            </ChakraText>
                                            <AccordionIcon ml='1em' height={'25px'} />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>


                                <AccordionItem mt='1em' borderY={'none'}>
                                    <h2>
                                        <AccordionButton >
                                            <ChakraText fontSize={'18px'} fontWeight={600}   textAlign='left'>Club</ChakraText>
                                            <AccordionIcon ml='1em' height={'25px'} />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>


                                <AccordionItem mt='1em' borderY={'none'}>
                                    <h2>
                                        <AccordionButton >
                                            <ChakraText fontSize={'18px'} fontWeight={600}   textAlign='left'>Things to do</ChakraText>
                                            <AccordionIcon ml='1em' height={'25px'} />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <ChakraText fontSize={'13px'} color={styles.neut600} mt='0.1em'> 
                                            <Link href=''>Water Sports </Link>
                                        </ChakraText>

                                        <ChakraText fontSize={'13px'} color={styles.neut600} mt='1em'> 
                                            <Link href=''>Day Parties </Link>
                                        </ChakraText>

                                        <ChakraText fontSize={'13px'} color={styles.neut600} mt='1em'> 
                                            <Link href=''> Outdoors </Link>
                                        </ChakraText>

                                        <ChakraText fontSize={'13px'} color={styles.neut600} mt='1em'> 
                                            <Link href=''> Rentals </Link>
                                        </ChakraText>

                                    </AccordionPanel>
                                </AccordionItem>





                            </Accordion>



                        </Box>


                        <Flex direction={'column'} flexGrow={1} py='2.5em'>

                            <Box>                                 

                                <Link href=''>                                
                                    <ChakraText py={2} px={4} fontSize={'18px'} fontWeight={600}   textAlign='left'>
                                        Saved Places
                                    </ChakraText>
                                </Link>


                                <ChakraText mt='0.7em' py={2} px={4} fontSize={'18px'} fontWeight={600}   textAlign='left'>
                                    <Link href=''>                                
                                        Pay with Crypto
                                    </Link>
                                </ChakraText>


                                <ChakraText mt='0.7em' py={2} px={4} fontSize={'18px'} fontWeight={600}   textAlign='left'>
                                    <Link href=''>                                
                                        Cart
                                    </Link>
                                </ChakraText>

                            </Box>



                            <Box mt='auto'>

                                <Link href=''>                                
                                    <ChakraText py={2} px={4} fontSize={'18px'} fontWeight={600}   textAlign='left'>
                                        Logout
                                    </ChakraText>
                                </Link>


                                <ChakraText mt='1em' py={2} px={4} fontSize={'18px'} fontWeight={600}   textAlign='left'>
                                    <Link href=''>                                
                                        Logout
                                    </Link>
                                </ChakraText>

                            </Box>

                            

                        </Flex>



                    </Flex>

                </Flex>


            </Box>

            <Flex 
             justify={'space-between'} align='center'     
             display={{base:'none',sm:'none',md:'none',lg:'flex'}}>

                <Image src="/logo.svg" height='65px' />
                

                <Menu>
                    <MenuButton  background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Eat & Drink </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>            
                </Menu>

                <Menu  >
                    <MenuButton background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Events </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Club </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>            
                </Menu>


                <Menu>
                    <MenuButton  background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Things to do </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Water Sports</MenuItem>
                        <MenuItem>Day Parties</MenuItem>
                        <MenuItem>Outdoors</MenuItem>
                        <MenuItem>Rentals</MenuItem>
                    </MenuList>            
                </Menu>


                <Menu>
                    <MenuButton  background='white' _active={{background:'white'}} as={Button}>
                        <Flex align='center'>
                            <AiOutlineUser fontSize='24px'/>
                            <Box ml='0.2em'>
                                <ChakraText fontSize={'15px'} fontWeight={500} hVariant='neutral'>Account</ChakraText>
                            </Box>
                        </Flex>

                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem>My History</MenuItem>
                        <MenuItem>Sign out</MenuItem>
                    </MenuList>            
                </Menu>



                <Flex >
                    <RiWallet2Line fontSize='24px'/>
                    <Box ml='0.2em'>
                        <ChakraText  fontSize={'15px'} fontWeight={500} hVariant='neutral'>Pay with crypto</ChakraText>
                    </Box>
                </Flex>


                <Flex>
                    <AiOutlineShoppingCart color={styles.neut700} fontSize='32px'/>
                    <Circle bg={styles.pry} fontWeight={700} size='27px'
                    color={styles.neut100} fontSize='14px' ml='0.6em'>
                        5
                    </Circle>
                </Flex>

            </Flex>

            <Flex position='relative' w='full' justify={'space-between'} align='center'   display={{base:'flex',sm:'flex', md:'none',lg:'none'}}  >

                <Flex cursor={'pointer'}>
                    <RiMenuLine onClick={toggleSlide} fontSize={'25px'}  />
                </Flex>

                <Image src="/logo.svg" height='53px' />


                <Flex>
                    <AiOutlineShoppingCart color={styles.neut700} fontSize='32px'/>
                    <Circle bg={styles.pry} fontWeight={700} size='27px'
                    color={styles.neut100} fontSize='14px' ml='0.6em'>
                        5
                    </Circle>
                </Flex>



            </Flex>

        </Box>

    )
}


export default Navbar
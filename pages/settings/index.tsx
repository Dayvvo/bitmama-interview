import Navbar from '../../screens/sections/nav'
import Footer from '../../screens/sections/footer'
import {Box} from '@chakra-ui/react';
import Header from '../../components/Header';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import useStylesHook from '../../hooks/useStyles';
import Reservations from '../../screens/Settings/reservations';
import Saved from '../../screens/Settings/saved';
import Payment from '../../screens/Settings/payment';


const Settings = ()=>{

    const styles=  useStylesHook();

    


    return(
        <>

            <Navbar/>

            <Box
             >  

                <Header hVariant='h5'
                 borderBottom={'1px solid #C4C4C4 '}
                 px={{base:'1.5em', md:'3em', lg:'10em'}}
                 pt={'0.5em'}
                 pb={'1em'}
                 >
                     Tunde Chukwu
                </Header>
                
                <Tabs orientation='vertical' 
                 px={{base:'1.5em', md:'3em', lg:'10em'}}
                 py={'1.2em'}
                >
                    <TabList borderLeft={0}>
                        {['Reservations','Saved places','Account details','Payment methods'].map((tab,index)=>
                        
                            <Tab fontSize={'15px'} p={'0.5em 1em'} justifyContent='flex-start'  
                             minW={{md:'200px'}} key={index} _selected={{color:styles.neut700,fontWeight:700}} >
                                 {tab}
                            </Tab>
                        
                        )}
                    </TabList>

                    <TabPanels >

                        <TabPanel>
                            <Reservations/>
                        </TabPanel>
                        <TabPanel>
                            <Saved/>
                        </TabPanel>
                        <TabPanel>

                            <p>three!</p>
                        
                        
                        </TabPanel>
                        <TabPanel>
                            <Payment/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>            

            </Box>

            <Footer/>
        
        </>

    )
}


export default Settings